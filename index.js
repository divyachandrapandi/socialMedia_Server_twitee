const express = require('express');
const path =require('path')
const bodyParser =require('body-parser')
const mongoose =require('mongoose')
const dotenv =require('dotenv')
const AuthRoute  = require('./Routes/Auth.route.js');
const  UserRoute= require('./Routes/User.route.js');
const  PostRoute = require('./Routes/Post.route.js');
const UploadRoute = require('./Routes/UploadRoute.js');
const cors = require('cors');

// Routes
const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors())

// app.use(express.static('public'))
app.use('/images',express.static('public') )
// console.log(path.join(__dirname, 'images', imageName)); 

dotenv.config()

mongoose.connect(process.env.MONGO_DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => app.listen(process.env.PORT, () => {
        console.log("Listening at Port " + process.env.PORT);
    })).catch((error) => {
        console.log("Error ---- " + error);
    })

    // usage of routes
app.use('/Auth', AuthRoute)
app.use('/User', UserRoute)
app.use('/Post', PostRoute)
app.use('/Upload', UploadRoute)