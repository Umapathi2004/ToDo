const express = require("express");
const http = require("http");
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 3000;

const server = http.createServer((req,res)=>{
    res.write("hi");
    res.end();
})

server.listen(PORT, ()=>(console.log(`The port is: ${PORT}`)));
