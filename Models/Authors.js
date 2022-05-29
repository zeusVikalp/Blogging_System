const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AuthorSchema = Schema({
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true }, // Email should be Unique 
    password : {type : String, required : true}    
})

const Author = mongoose.model("authors", AuthorSchema);
module.exports = Author;