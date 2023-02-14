// MONGO COMPASS using Mongoose
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook"
const mongoURI1 = "mongodb+srv://akumar0119:Amarsingh1996@cluster01.uvxd4a6.mongodb.net/inotebook?retryWrites=true&w=majority"
async function connectToMongo(){
   await mongoose.connect(mongoURI1,(err)=>{
    if(!err){
        console.log('Connect to mongoDB Successfully')
    }else{
        console.log('Connect to mongoDB Unsuccessfully')
     }
   })
}

module.exports = connectToMongo;