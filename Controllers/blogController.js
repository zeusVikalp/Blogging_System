let blogModel = require('../Models/Blogs');


//For creating Blog

async function createPost(request,response){
    console.log(request.body)
    try {
        let body = request.body;
        body.timeStamps = new Date()
        let res = await blogModel.insertMany([body]);
        response.status(200).json({
            status: "Success",
            message: "Posted Successfully",
            post: res
        })
    } catch (error) {
        console.log(error)
        response.status(400).json({
            status: "Error in saving Blog",
            error: error
        })
        
    }
}
        
// For Searching Blog

async function Search(request,response){
    try {
        let search = request.query.title;
        let authSearch = request.query.author
        let res = await blogModel.find( { $and: [ { title:{$regex : search, $options : '$i'} }, { author :{$regex:authSearch, $options : '$i'} } ] } )
        // let res1 = await userModel.find
        if(res.length){
        response.status(200).json({
            status:"Success",
            message: "Search Successfully",
            blog : res
        })  
    }
    else{
        response.send("Data not found")
    }
    } catch (error) {
        console.log(error)
        response.status(400).json({
            status:"Error",
            message : "Author or Title name is not Correct"
        })

        
    } 
    
    
}

// For Liking the Blog

async function Like(req,res){
    let authorId = req.headers.authorid;
    let blogId = req.headers.blogid;
    // console.log(blogId);
    let response = await blogModel.findOne({_id : blogId});
    let LikedByarr = response.likedBy;
    if(LikedByarr.includes(authorId)){
        try {
            let like = response.likes;
            like--;
            let index = LikedByarr.indexOf(authorId);
            LikedByarr.splice(index,1);
            await blogModel.updateOne({_id : blogId}, {likes : like})
            await blogModel.updateOne({_id : blogId},{likedBy : LikedByarr});
            res.status(200).json({
            status : 'Unliked Succefully'
        })
        } catch (error) {
            console.log(error);
            res.status(401).json({
                status : "Error Occured",
            })
        }
    }else{
        let like = response.likes;
        like++;
        LikedByarr.push(authorId);
        await blogModel.updateOne({_id : blogId}, {likes : like});
        await blogModel.updateOne({_id : blogId}, {likedBy: LikedByarr});
        res.status(200).json({
            status : 'Liked Successfully'
        })
    }
}

//For finding all the blogs

async function AllBlogs(req,res){
    try {
        let blogs = await blogModel.find({}).sort({likes : -1});
        res.status(200).json({
        status : "Successfully get all blogs by popularity",
        blogs : blogs
    })
    } catch (error) {
        res.status(401).json({
            status : "Error Occured during fetching all blogs",
            error : error
        })
    }
    
}

//for finding a particular blog

async function Blog(req,res){
    try {
        let blogId = req.headers.blogid;
        let blogDetails = await blogModel.findOne({_id:blogId});
        res.status(200).json({
        status : "Success",
        blog : blogDetails
    })
    } catch (error) {
        res.status(401).json({
            status : "Failed"
        })
    }

}

//for publishing a blog

async function Publish(req,res){
    try {
            const blogId = req.headers.blogid;
            await blogModel.updateOne({_id: blogId}, {published : true});
            res.status(200).json({
                status: "Successfully Published"
            })
        
    } catch (error) {
        res.status(401).json({
                status: "Something went wrong in Publishing",
                message : error
        })
    }
}

function Dashboard(req,res){
    res.send("This is Dashboard")
}



module.exports = {
    createPost,
    Search,
    Like,
    Blog,
    AllBlogs,
    Publish,
    Dashboard

}