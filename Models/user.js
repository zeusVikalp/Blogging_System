const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title : {type:String},
    Discription : {type:String},
    labels : [{type:String}],

    likes : {type:Number, default:0},
     timeStamps : {type: Date},
    authorId: {type:mongoose.Types.ObjectId, ref: "author"},

})
const user = mongoose.model("user",blogSchema);
module.exports = user

