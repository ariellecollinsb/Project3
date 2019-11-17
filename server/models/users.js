const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "String is required",
        unique: true
    },

    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"] //regex is faster to do than a validate to verify an email address
    },

    password: {
        type: String,
        trim: true,
        required: true,
        validate: [
            function(input) {
                return input.length >= 6;
            },

            "Password should be longer than 6 characters!"
        ]
    },

    age: { type: Integer, required: true},

    gender: String,

    interests: [String],

    about: String,

    date: { type: Date, default: Date.now }
});





const User = mongoose.model("User", userSchema);

module.exports = User;
