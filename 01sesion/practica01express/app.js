const express = require("express");
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.status(200).send({message: "En la pestaña user esta el user"})
})

app.post('/user', (req, res) => {
  const user = [{
    id: 283399,
    password: 8365582737373,
    name: "Arthur",
    lastname: "Morgan",
    email: "arthurmorgan1899@haiti.com"
  }]
  res.status(200).send(user)
})

app.listen(port, () => {
  console.log("server is listening in port", port)
})