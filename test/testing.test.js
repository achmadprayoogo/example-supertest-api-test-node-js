import supertest from "supertest";
import app from "../index.js";

let server;

beforeAll(() => {
  server = app.listen(); // Start the server before all tests
});

afterAll((done) => {
  server.close(done); // Close the server after all tests
});

const request = supertest(app);

describe("GET / get all users", () => {
  it("responds with json", async () => {
    const response = await request.get("/user");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
  });
});

const expectedUsers = [
  { id: 1, name: "achmad" },
  { id: 2, name: "john" },
  { id: 3, name: "george" },
  { id: 4, name: "harry" },
  { id: 5, name: "kelly" },
  { id: 6, name: "olivia" },
  { id: 7, name: "peter" },
];

describe("GET /:id get user by id whit parameter", () => {
  const testUser = async (user) => {
    const response = await request.get(`/user/${user.id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.data.name).toBe(user.name);
  };

  for (const user of expectedUsers) {
    it(`responds with user data for id ${user.id}`, async () => {
      await testUser(user);
    });
  }
});

describe("GET /user?search=ach", () => {
  it("responds with json", async () => {
    const response = await request.get("/user?search=ach");
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.data.length).toBe(1);
    expect(response.body.data[0]).toEqual({ id: 1, name: "achmad" });
  });
});

describe("error handler", () => {
  it("responds with 404 for parameters that don't exist", async () => {
    const response = await request.get("/user/999");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body.error).toBe("User not found");
  });
  it("responds with 404 for search query that don't exist", async () => {
    const response = await request.get("/user?search=999");
    expect(response.status).toBe(404);
    expect(response.type).toBe("application/json");
    expect(response.body.error).toBe("User not found");
  });
});
