const express=require('express');
const bodyParser = require("body-parser");
const app=express();
const path=require('path');
var cors=require('cors');
app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const mongoose = require('mongoose');
const { json } = require('express');
mongoose.connect('mongodb://localhost:27017/notistic', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected")
});
const notesSchema = new mongoose.Schema({
    des: String,
    time:String
  });
  const Notes = mongoose.model('Note', notesSchema);
app.get('/notes',async (req,res)=>{
    const notes=await Notes.find();
    res.status(200);
    res.send(notes);
    console.log("data sent")
})

app.post('/notes',async function(req,res){
    const newobj=req.body;
    if(newobj.des!==undefined || newobj.des!==undefined){
        try{
    const note=new Notes({des:newobj.des,time:newobj.time});
    const ret=await note.save();
    console.log("   Added");
    res.status(200);
    res.json(ret);

        }catch{
            res.status(501);
            res.send("internal server error");
        }
    }
    else{
        res.status(400);
        res.send("Bad request");
    }
    
})
app.delete('/notes',async function(req,res){

    let d=req.body;
    if(d){
    let deleted=await Notes.deleteOne(d)
    res.status(200);
    res.json(deleted);
    console.log("Deleted")
    }
    else{
        res.status(400);
        res.send("Bad Request")
    }
})
app.listen(
    80,()=>{
        console.log("sever running");
    }
)