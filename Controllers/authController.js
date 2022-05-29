const UserModel = require("../Models/Authors");

async function Register(req,res){

    try {        
    let userDetails = req.body;
    let response = await UserModel.insertMany([userDetails]);
    console.log(response);
    res.status(200).json({
        status : "Registration Successfull",
        user : response
    })
    } catch (error) {
        res.status(401).json({
            status : "Something Went Wrong",
            error : error
        })
    }

}

module.exports = {
    Register
}