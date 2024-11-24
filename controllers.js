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
  res.send(users);
}

function getUserById(req, res) {
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
}

export { getAllUsers, getUserById };
