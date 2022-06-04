const express = require("express");
const app = express();
const port = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");

dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));

// app.use("/", (req,res)=>{
//     console.log("This is main url")
// })

app.use("/api/auth", authRoute);

app.listen(port, () =>{
    console.log("Backend is running at port " + port + ".")
})