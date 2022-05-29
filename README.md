# Blogging_System_API

# How To Use

## Registering_Author

## Request

`POST /register`

    {
        "name":"Vikalp Dwivedi",
        "email": "vikalpdwivedi786@gmail.com",
        "password": "Vikalp@1234"
    }
    
## Response

`Success (Status Code 200)`

    {
        "status": "Registration Successfull",
        "user": [
            {
                "name": "Vikalp Dwivedi",
                "email": "vikalpdwivedi786@gmail.com",
                "password": "Vikalp@1234",

            }
        ]
    }
`Failure (Status Code 401)`

      {
          "status": "Something Went Wrong",
           error: error
      }
      
 ## Creating Post
 
 ## Request
 
 `Post /createBlog`
 
     {
        "title": "title",
        "discription": "discription",
        "labels": ["label1" , "label2"]
    }
    
## Response

`Success (Status code 200)`

    {
        "status": "Blogs Successfully Saved",
        "message": "Posted Successfully",
        "post" : {
                    "title" : "title",
                    "description" : "description",
                    "labels" : "lables"
                } 
    }
    
`Failure (Status Code 401)`

    {
        "status": "Error in Saving Blog",
         error: error
    }
