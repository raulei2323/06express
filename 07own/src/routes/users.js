const express = require('express')
const router = express.Router()
const userUseCases = require('../utils/userUseCase')
const authMiddlewares = require('../middlewares/auth')
const User = require('../models/usersModel')

//?CRUD user: Create(post), Read(get), Update(put), Delete(delete)

router.post('/login', async (req, res) => {
  try{
    const { email, password } = req.body
    const user = await User.findOne({email: email})
    if (!user || user.password != password) {
      res.status(401).send({message: "Invalid user or password"})
    } else {
      //TODO create token
      res.status(200).send({message: "Login success", data: "token"})
    }
  } catch (error){
      res.status(400).send({message: error})
  }
})

router.post('/', async (req, res) => {
    try{
      const user = req.body
      const newUser = await User.create(user) //userUseCases.createUser(user)
      await newUser.save()
      res.status(201).send({message: "User created", data: newUser})
    } catch (error){
        res.status(400).send({message: error})
    }
})

router.get('/', async (req, res) => {
  try{
    const users = await User.find()
    res.send({message: "All Users", data : users})

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.get('/:email', async (req, res) => {
  try{
    const { email } = req.params
    const user = await User.find({email: email})
    res.send({message: "All Users", data : user})

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.put('/:id', authMiddlewares.validUserId, async (req, res) => {
  try{
    const user = req.body
    const { id } = req.params
    const updatedUser = await User.findByIdAndUpdate(id, user, {returnOriginal: false}) //await userUseCases.updateUser(id, user)
    res.send({message: "User updated",data: updatedUser })

  } catch (error){
      res.status(400).send({message: error})
  }
})

router.delete('/:id', authMiddlewares.validUserId, async (req, res) => {
  try{
    const { id } = req.params
    //await userUseCases.deleteUser(id)
    await User.findByIdAndDelete(id)
    res.send({message: "User deleted"})

  } catch (error){
      res.status(400).send({message: error})
  }
})

module.exports = router



