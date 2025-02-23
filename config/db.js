const mongoose=require("mongoose");
require("dotenv").config()

const connectDB=async() => {
  try{
    await mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("mongo connection success")
} catch(error){
  console.log("mongo connection failed",error)
  process.exit(1)
}
}

module.exports=connectDB
