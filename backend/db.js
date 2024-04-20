const mongoose = require('mongoose')

const mongURI = "mongodb://127.0.0.1:27017/Hritesh"

const connectToMongo=()=>{
    mongoose.connect(mongURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log("Connected to MongoDB successfully");
    })
    .catch((error)=>{
        console.error("Error connecting to mongoDB:", error);
    });
};

module.exports = connectToMongo;