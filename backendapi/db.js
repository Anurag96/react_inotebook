// getting-started.js
const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI = "mongodb://localhost:27017/inotebook"



async function connectToMongo(){
   await mongoose.connect(mongoURI,(err)=>{
    if(!err){
        console.log('Connect to mongoDB Successfully')
    }else{
        console.log('Connect to mongoDB Unsuccessfully')
     }
   })
}

module.exports = connectToMongo;