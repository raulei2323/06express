const express = require("express");
const app = express();
const usersRoutes = require("./src/routes/users.js");
const port = 3000;

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  next();
};

app.use(express.json());

app.use(auth);

app.get("/hi", (req, res) => {
  res.status(200).send({ message: "Hello, Koders! en get hi" } );
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

app.user("/users", usersRoutes);

app.listen(port, () => {
  console.log("server is listening in port", port);
});
