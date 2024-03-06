require('dotenv').config()
const express = require('express')
const app = express()
const userRoutes = require('./src/routes/users')
const port = 3009
const mongoDB = require('./src/db/db')

app.use(express.json())

app.get('/', (req,res) => {
    res.send({message: 'Repaso Express'})
})


app.use('/users', userRoutes)

mongoDB.connect.then((message) => {
    console.log(message)
    app.listen(port, () => {
        console.log('server ready on port 3009')
    })
}).catch((error) => {
    console.log(error)
})

