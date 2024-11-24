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
    const response = await request.get("/");
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

describe("GET /:id get user by id", () => {
  const testUser = async (user) => {
    const response = await request.get(`/${user.id}`);
    expect(response.status).toBe(200);
    expect(response.type).toBe("application/json");
    expect(response.body.name).toBe(user.name);
  };

  for (const user of expectedUsers) {
    it(`responds with user data for id ${user.id}`, async () => {
      await testUser(user);
    });
  }
});
