const express = require("express");
const connectDB = require('./db')
const app = express();
connectDB()
require('dotenv').config()
// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("App up and running"));

// post

app.post('/process_post',(req, res)  => res.send("App up and not running")); 

   

// setting up port
const PORT = process.env.PORT || 8000;


// const db = process.env.mongo_uri;


// const connectDB = async () => {
//     try {
//         await mongoose.connect(db, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("MongoDB is connected");
//     } catch (err) {
//         console.error(err.message);
//         process.exit(1);
//     }
// };

// 