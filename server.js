const express=require('express');
var mongoose = require('mongoose');
const api = require('./api');
 
const port=3000;
const app=express();

mongoose.connect('mongodb://localhost:27017/demo');

  
app.listen(port, function() {
    console.log("Server is listening at port:" + port);
});
 

// Parses the text as json
app.use(express.json());
 
app.use('/api', api);