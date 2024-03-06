const express = require('express')
const router = express.Router()
const userUseCases = require('../utils/userUseCases')
const authMiddleware = require('../middlewares/auth')
const User = require('../models/users')


//CRUD users: post, get, update, delete

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email }); 
        
        if (!user || user.password !== password) { 
            res.status(401).send({ message: 'Invalid email or password' });
        } else {
            //TODO create token
            res.status(200).send({ message: "Login successful", data: "token" });
        }
    } catch (error) {
        res.status(400).send({ message: error});
    }
})

router.post('/', async (req, res) => {
    try {
        const user = req.body
        const newUser = await User.create(user)
         await newUser.save()

        res.status(201).send({message: 'user created', data: newUser})
    } catch (error) {
        res.status(400).send({message: error})
    }
})

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        
        res.send({message: 'All users', data: users})
    } catch (error) {
        res.status(400).send({message: error})
    }
})

router.get('/:email', async (req, res) => {
    try {
        const { email } = req.params
        const users = await User.find({email: email})
        
        res.send({message: 'All users', data: users})
    } catch (error) {
        res.status(400).send({message: error})
    }
})

router.put('/:id', authMiddleware.validUserId, async (req, res) => {
    try {
        const user = req.body
        const { id } = req.params
        const updatedUser = await User.findByIdAndUpdate(id, user, {returnOriginal: false})
        
        
        res.send({message: 'User updated', data: updatedUser})
    } catch (error) {
        res.status(400).send({message: error})
    }
})

router.delete('/:id', authMiddleware.validUserId, async (req, res) => {
    try {
        const { id } = req.params
        //await userUseCases.deleteUser(id)
        await User.findByIdAndDelete(id)
        res.send({message:'User deleted'})
    } catch (error) {
        res.status(400).send({message: error})
    }
})

module.exports = router