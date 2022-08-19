const {Router}=require('express')

const route=Router()


route.get('/',(req,res)=>{

    res.send({

            "user":{
                "name":"rafa",
                "lastname":"benrhouma",
            }
    })

})


module.exports=route