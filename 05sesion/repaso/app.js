const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send({message: "API Kodemia reapso gen 31"})
}) 

app.listen(port, () =>{
    console.log("Server is ready in port: " + port)
})