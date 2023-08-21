const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/',(req,res)=>{
    res.send("hllo")
})

const port = process.env.PORT||8000
app.listen(port,()=>{
    console.log("Server running on: " + port);
})