const express = require("express");
const mongoose = require("mongoose");

const apiV1 = require('./APIVersions/V1/index.js');

const app = express();

//CONNECTING TO ATLAS THROUGH MONGOOSE
const connectionString="mongodb+srv://camoSheets:vQFvBxS67LILByJX@cluster0-xgzqn.mongodb.net/crudDB?retryWrites=true&w=majority"
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',()=>{
  console.log('we are connected to MONGODB')
})



app.use('/v1',apiV1)


app.listen(3000,()=>{
  console.log('listening on port 3000')
})
