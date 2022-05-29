const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {type:String},
    discription : {type:String},
    authorId: {type:mongoose.Types.ObjectId, ref: "author"},
    labels : [{type:String}],
    likes : {type:Number, default:0},
    timeStamps : {type: Date},
    likedBy: [{type: mongoose.Types.ObjectId, ref : "authors"}],
    published : {type: Boolean, default : false} // For Checking Blog is Published or Not

})
const Blog = mongoose.model("blogs",blogSchema);
module.exports = Blog

