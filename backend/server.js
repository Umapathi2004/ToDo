const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

require("dotenv").config();
const app = express();
const PORT = process.env.port || 5000;

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log("Conntection Successfully..."))
.catch((error)=>console.log(error));

app.use(router);
app.listen(PORT, ()=>(console.log(`The port is: ${PORT}`)));
