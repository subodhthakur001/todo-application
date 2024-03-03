const mongoose = require("mongoose");
const { boolean } = require("yup");

mongoose.connect("mongodb+srv://admin:admin@cluster1.o9ppecy.mongodb.net/todos")
const todoSchema = mongoose.Schema({
     "title" : String,
     "description" : String,
     "completed" : {
          type : Boolean,
          default :false
     }
})

const todo = mongoose.model('todos',todoSchema)

module.exports = {todo}