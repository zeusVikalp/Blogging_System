const mongoose = require("mongoose");

class mongo {
    constructor(){
        this.CreateDatabaseConnection();
    }
    CreateDatabaseConnection(){
        mongoose.connect(`mongodb+srv://vikalpD:9erMvNviesv7cfpg@cluster0.izg2n.mongodb.net/?retryWrites=true&w=majority`);
        
        mongoose.connection.once("open",()=>{
            console.log("MongoDB Connected");
        })

        mongoose.connection.on("error",()=>{
            console.log("Error Occured in Connection");
        })
    }
}

module.exports = mongo;