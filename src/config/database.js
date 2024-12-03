const mongoose = require("mongoose")
require("dotenv").config()
const MONGO_URI = "mongodb+srv://amritbehera2002:Amritbehera@cluster0.owwl0.mongodb.net/FoodApp?retryWrites=true&w=majority";


const connectDb = async () => {
    try {
        await mongoose.connect(MONGO_URI,{
            dbName: 'FoodApp',  
        })
    } catch (error) {
        console.log("mongodb connection failed" + error)
        process.exit(1)
    }
}

module.exports = connectDb