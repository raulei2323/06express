const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/user/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const users = [
      {
        id: 283399,
        password: 8365582737373,
        name: "Arthur",
        lastname: "Morgan",
        email: "arthurmorgan1899@haiti.com",
      },
    ];
    const user = users.find((u) => u.id == id);
    if (user) {
      res.send({ message: "user data", data: user });
    } else {
      res.status(404).send({ message: "user not found" });
    }
  } catch (error) {
    res.status(400).send({ message: error });
  }
});

app.get("/hi", (req, res) => {
  res.status(200).send({ message: "Hello, Koders! en get hi" });
});

app.post("/user/", (req, res) => {
  let { id } = req.body;
  const users = [
    {
      id: 283399,
      password: 8365582737373,
      name: "Arthur",
      lastname: "Morgan",
      email: "arthurmorgan1899@haiti.com",
    },
  ];
  const user = users.find((u) => u.id == id);
  if (user) {
    res.send({ message: "user data", data: user });
  } else {
    res.status(404).send({ message: "user not found" });
  }
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.status(201).send({ message: "Hola en post y status 201" });
});

app.put("/", (req, res) => {
  res.status(200).send({ message: "put is OK" });
});

app.delete("/", (req, res) => {
  res.status(200).send({ message: "delete is OK" });
});

app.listen(port, () => {
  console.log("server is listening in port", port);
});
