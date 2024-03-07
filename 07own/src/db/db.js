const mongoose = require ("mongoose")
const URI = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@cluster0.gqtn9gf.mongodb.net/kodemia_gen31`
const connect = new Promise(async(resolve, reject) => {
    let conn = await mongoose.connect(URI)
    if(conn) resolve('Conexion DB success')
    reject('Error conexion DB')
})

module.exports = {
    connect
}