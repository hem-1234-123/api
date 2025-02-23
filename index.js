const express=require("express");
require('dotenv').config()
const connectDB=require("./config/db")
const User = require("./model/user")
connectDB()


const port=3020;
const app= express();

app.use(express.json());

app.get("/",(req,res)=> {

})

app.post("/add",(req,res)=> {

})

app.post("/api/user/add", async(req,res)=> {
  const {name,email,age,password} = req.body
  const user=new User({
    name,
    email,
    age,
    password,
  })
  await user.save()
  res.send(user)
})

app.get('/',(req,res) => {
  res.send("now after using nodemon")
})

app.post ('/add',(req,res)=> {
  //console.log(req.body)
  const {number1,number2}=req.body
  const sum=number1+number2
  res.send("The sum of 2 numbers is: "+sum)
})

app.listen(port,() => {
  console.log("server is running on port: "+port)
})