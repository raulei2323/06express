const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        match: [/^[a-zA-Z]+$/, 'Character not valid']
    },
    last_name: {
        type: String,
    match: [/^[a-zA-Z]+$/, 'Character not valid']
    },
     email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Email not valid']
     },
     gender: {
        type: String,
        enum: ['Male', 'Female']
     },
     password:{
        type: String,
        required: true
     },
     phone:{
        type: String,
        match: [/ ^[0-9]+$/, 'Phone number not valid']
     }
 
},

    {    timestamps: true

    },

    {

       createtoken: async (payload) => {
         return jwt.sign(payload, process.env.JWT_SING, {expiresIn: '1h'


         })
   
       }
    }

)

const User = mongoose.model('users', userSchema)

module.exports = User;