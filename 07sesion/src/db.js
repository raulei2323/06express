const mongoose = require('mongoose')

const connect = new Promise(async(resolve, reject) => {
    let conn = await mongoose.connect('')
})