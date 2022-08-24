const {Router}=require('express')

const route=Router()
// GET ALL TAGS
route.get('/',(req,res)=>{
    res.send(
        {
            "tags": [
              "reactjs",
              "angularjs"
            ]
          }
    )
})
module.exports=route