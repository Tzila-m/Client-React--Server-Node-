const mongoose = require("mongoose")

const UsersSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },

    address: {
        type: String

    },

    phone: {
        type: String
    }

},
{
    timestamps: true
}
)


module.exports = mongoose.model('Users', UsersSchema)