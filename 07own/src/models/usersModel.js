const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        match: [/^[A-Za-z]+$/, 'Character not valid'],
    },
    last_name: {
        type: String,
        match: [/^[A-Za-z]+$/, 'Character not valid'],
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
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        match: [/^[0-9]+$/, 'Phone number not valid']

    }

},
{
    timestamp: true
}
)

const User = mongoose.model('users',  userSchema) //?users en esta linea hace referencia a la coleccion en nuestra db

module.exports = User