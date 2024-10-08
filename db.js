const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
mongoose.connect("mongodb+srv://admin:0000@cluster0.u8gug.mongodb.net/association-db");

const user = new Schema({
    fullName: String,
    email: String,
    phoneNumber: Number,
    collegeName: String,
    courseName: String,
    year: Number,
    nativeplace: String
});

const userModel = mongoose.model("users", user);

module.exports = {
    userModel
}