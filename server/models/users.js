const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true},
    password: {type: Password, required: true},
    age: { type: Integer, required: true},
    gender: String,
    interests: [String],
    about: String,
    date: { type: Date, default: Date.now }
});





const User = mongoose.model("User", userSchema);

module.exports = User;