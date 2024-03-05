const express = require('express')
const router = express.Router()

//?CRUD user: Create(post), Read(get), Update(put), Delete(delete)

router.post('/', async (req, res) => {
    try{
      const user = req.body
      //TODO create user
      res.status(201).send({message: "User created", data: user})

    } catch (error){
        res.status(400).send({message: error})
    }
})

router.get('/', async (req, res) => {
  try{
    const users = []
    //TODO get users
    res.send({message: "All Users", data : users})

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.put('/:id', async (req, res) => {
  try{
    const user = req.body
    const { id } = req.params
    //TODO update user
    res.send({message: "User updated",data: user})

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.delete('/:id', async (req, res) => {
  try{
    const { id } = req.params
    //TODO delete user
    res.send({message: "User deleted"})

  } catch (error){
      res.status(400).send({message: error})
  }
})

module.exports = router



