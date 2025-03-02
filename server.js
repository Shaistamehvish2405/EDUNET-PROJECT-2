const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')

const app=express()
const PORT=3000

//Home page api
app.get('/',(req, res)=>{
    res.send("<h1 align=center>Welcome to the MERN stack week 2 session</h1>")
})

//Registration page api

app.post('/register',async(req, res)=>{
    const {username,email,passsword}=req.body
    try{
        const hashedPassword= await bcrypt.hash(password,10)
        const user=new User({username,email,password:hashedPassword})
    }
    catch(err)
    {
        console.log(err)
    }
})


mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully..")
).catch(
    (err)=>console.log(err)
)

app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("Server is running on port :"+PORT)
})