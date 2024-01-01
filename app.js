const express = require('express');
const app = express();


const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const user_routes = require('./routes/user');

mongoose.connect('mongodb://0.0.0.0:27017/bax')
.then(()=>{
  console.log('mongodb is connected...');
});

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());


app.use('/api', user_routes);

app.use((req,res,next)=>{
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error,req,res,next)=>{
  res.status(error.status || 500);
  res.json({
    error: {
    message:error.message 
    }
  })  
})

module.exports = app;
