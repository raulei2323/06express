const express = require('express')
const router = express.Router()

router.get('/:id', (req, res) => {
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
})

module.exports = router
