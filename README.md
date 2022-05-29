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
    
## For Getting All Blogs By Popularity

## Request 

`Get /allBlogs`

## Response

`Success (Status Code 200)`

    {
        "status": "Successfully get all blogs by popularity",
        "blogs" : blogs
    }

`Failure (Status Code 401)`

    {
        "status": "Error Occured during fetching all blogs",
         error : error
    }
    
# Search Blogs based on Author and Title

## Request

`GET /search?author=author&title=title`

## Response

`Success (Status Code 200)`

     {
          "status" : "Success",
          "message": "Search Successfully"
          "blog" : response    
      }
      
 `Failure (Status Code 401)`

      {
            "status" : "Error",
            "message" : "Author or Title name is not Correct"
      }
      
 # Publish Blog
 
 ## Request
 
 `POST /publish`
 
 ## Response
 
 `Success (Status Code 200)`

      {
          "status" : "Successfully Published"
      }
      
 `Failure (Status Code 401)`
  
     {
         "status": "Something went wrong in Publishing",
         "message" : error
     }
     
      
 # To View a Blog
 
 ## Request
 
 `GET /blogDetails`
 
     {
      headers : {
          "blogid" : blogid,
      }
    }

## Response

`Success (Status Code 200)`

      {
          "status" : "Success",
          "blog" : blogDetails
      }
      
`Failure (Status Code 401)`

     {
           status : "Failed"
     }
     
# To Like or Unlike a Blog

## Request

`PUT /blog/like`

    {
      headers : {
          "blogid" : blogid,
          "authorid" : authorid
      }
    }
    
## Response

`Success (Status Code 200)`

      {
          status : 'Liked Successfully' or 'Unliked Successfully'
      }

`Failure (Status Code 401)`

      {
             status : "Error Occured",
      }
