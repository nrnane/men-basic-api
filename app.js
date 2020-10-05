var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var Book = require('./Book.model')
var mongoose = require("mongoose");

var db = 'mongodb://localhost/example';
mongoose.connect(db,{useNewUrlParser:true});
const con = mongoose.connection;
con.on('open',function(){
    console.log('Connected...');
})
app.use(express.json());
var port = 8080;
app.listen(port,function(){
    console.log("app is running on port:"+port);
})

const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter);

app.get("/",function(req,res){
    res.send("Happy to be here");
})
app.get("/books",function(req,res){
    
    Book.find({}).exec(function(err,books){
        if(err){
            res.send('Error has occured');
        }else{
            console.log(books);
            res.json(books);
        }
    });
    res.send("get all books");
})