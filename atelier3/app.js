// hothom iinik mghamtha
const express = require("express");
const logger = require("morgan");
const createError = require("http-errors");
//
//base de donnees
const dbConfig= require("./database/mongodb.json");
const mongoose=require("mongoose");


//les dossiers des routes
const studentRouter=require('./routes/students');




//

// hothom iinik mghamtha
const app = express();

app.use(logger('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//

//appel aux routes
app.use('/student',studentRouter);


app.use((req,res,next)=>
{next(createError(404));

});


//
mongoose.set('strictQuery', true);
//connext to db

mongoose.connect(dbConfig.mongo.uri);


//export to app
module.exports = app;