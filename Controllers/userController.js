let userModel = require('../Models/user');

async function createPost(request,response){
    console.log(request.body)
    try {
        let body = request.body;
        let header = request.headers;

            body.timeStamps = new Date()
        
        
        let res = await userModel.insertMany([body]);
        response.status(200).json({
            status: "Success",
            message: "Posted Successfully",
            post: res
        })
    } catch (error) {
        console.log(error)
        response.status(400).json({
            status: "Error"
        })
        
    }
}

async function getBlog(request,response){
    try {
        let search = request.query.title;
        let authSearch = request.query.author
        let res = await userModel.find( { $and: [ { title:{$regex : search, $options : '$i'} }, { author :{$regex:authSearch, $options : '$i'} } ] } )
        // let res1 = await userModel.find
        if(res.length){
        response.status(200).json({
            status:"Success",
            message: "Search Successfully",
            user : res
        })  
    }
    else{
        res.send("Data not found")
    }
    } catch (error) {
        console.log(error)
        response.status(400).json({
            status:"Error"
        })

        
    } 
    
    
}

// async function authPost(request,response){
//     try {
//         let body = request.body
//         let res = await authorModel.insertMany([body]);
//         response.status(200).json({
//             status: "author Successfull",
//             message: "author post successfully",
//             authpost: res
//         })
//     } catch (error) {
//         console.log(error)
//         response.status(400).json({
//             status: "Error"
//         })
        
//     }
// }

module.exports = {
    createPost,
    getBlog

}