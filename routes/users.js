const  mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/hero1");

 const userschma = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

  module.exports = mongoose.model("User",userschma)