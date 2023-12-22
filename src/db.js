const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to Mongodb...")
    } catch (error) {
        console.error('Error Connecting to database : ', error)
    }
}

module.exports = connectDB;