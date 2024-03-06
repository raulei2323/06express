const express = require('express')
const router = express.Router()
const userUseCases = require('../utils/userUseCase')
const authMiddlewares = require('../middlewares/auth')
//?CRUD user: Create(post), Read(get), Update(put), Delete(delete)

router.post('/', async (req, res) => {
    try{
      const user = req.body
      const newUser = await userUseCases.createUser(user)
      res.status(201).send({message: "User created", data: newUser})

    } catch (error){
        res.status(400).send({message: error})
    }
})

router.get('/', async (req, res) => {
  try{
    const users = await userUseCases.getUsers()
    res.send({message: "All Users", data : users})

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.put('/:id', authMiddlewares.validUserId, async (req, res) => {
  try{
    const user = req.body
    const { id } = req.params
    const updatedUser = await userUseCases.updateUser(id, user)

    res.send({message: "User updated",data: updatedUser })

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.delete('/:id', authMiddlewares.validUserId, async (req, res) => {
  try{
    const { id } = req.params
    await userUseCases.deleteUser(id)
    res.send({message: "User deleted"})

  } catch (error){
      res.status(400).send({message: error})
  }
})

module.exports = router



