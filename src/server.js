const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const urlRoutes = require('./routes/urlRoutes');
const dotenv = require('dotenv');
// const mongoose = require('mongoose');

dotenv.config();

// mongoose.connect(process.env.MONGO).then(()=>{
//     console.log("Connected to MongoDB...");
// }).catch((err)=>{
//     console.log(err);
// })

const app = express();

const PORT = process.env.PORT||3000;

connectDB();

app.use(bodyParser.json());
app.use('/', urlRoutes);
app.use(express.static('public'));

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})