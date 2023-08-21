const express = require('express');
const app = express();
const dotenv = require('dotenv');
const router = require('./routes/index')

dotenv.config();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',router)

const port = process.env.PORT||8000
app.listen(port,()=>{
    console.log("Server running on: " + port);
})