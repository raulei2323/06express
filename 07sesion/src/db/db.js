const mongoose = require('mongoose')
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.g36plz3.mongodb.net/Kodemia`

const connect = new Promise( async (resolve, reject) => {
    let conn = await mongoose.connect(URI)
    if (conn) resolve('Conecction to DB success')
    reject('Error connecting to the DB')
})

module.exports = {
    connect
}