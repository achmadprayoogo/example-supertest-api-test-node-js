const users = [
  { id: 1, name: "achmad" },
  { id: 2, name: "john" },
  { id: 3, name: "george" },
  { id: 4, name: "harry" },
  { id: 5, name: "kelly" },
  { id: 6, name: "olivia" },
  { id: 7, name: "peter" },
];

function getAllUsers(req, res) {
  if (req.query.search) {
    searchUsers(req, res);
  } else {
    res.send({
      status: 200,
      message: "success",
      data: users,
    });
  }
}

function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const result = users.find((user) => user.id === id);
  if (!result) {
    throw new Error("User not found");
  }
  res.send({
    status: 200,
    message: "success",
    data: result,
  });
}

function searchUsers(req, res) {
  const key = req.query.search.toLowerCase();
  const result = users.filter(
    (user) =>
      user.name.toLowerCase().includes(key) || user.id.toString().includes(key)
  );
  if (result.length === 0) {
    throw new Error("User not found");
  }
  res.send({
    status: 200,
    message: "success",
    data: result,
  });
}

function errorHandler(err, req, res, next) {
  if (err.message === "User not found") {
    res.status(404).send({
      status: 404,
      error: err.message,
    });
  } else {
    res.status(500).send({
      status: 404,
      error: err.message,
    });
  }
  next();
}
export { getAllUsers, getUserById, errorHandler };
