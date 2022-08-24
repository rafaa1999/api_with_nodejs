const {Router}=require('express')

const route=Router()

route.get('/',(req,res)=>{
    res.send(
        {
            "user1": {
              "email": "jake@jake.jake",
              "token": "jwt.token.here",
              "username": "jake",
              "bio": "I work at statefarm",
              "image": null
            },
            "user2": {
                "email": "jake@jake.jake",
                "token": "jwt.token.here",
                "username": "jake",
                "bio": "I work at statefarm",
                "image": null
              },
              "user3": {
                "email": "jake@jake.jake",
                "token": "jwt.token.here",
                "username": "jake",
                "bio": "I work at statefarm",
                "image": null
              }
          }
    )
})
module.exports=route