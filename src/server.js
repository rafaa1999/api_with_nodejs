const express=require('express')


const app=express()

//for post request
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//for routes
app.use('/api',require('./routes/api'))

app.listen(7788,()=>{

    console.log('server is running oh http://localhost:7788')
})