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
mongoose.connect('mongodb://localhost:27017/notistic', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connected")
});
const notesSchema = new mongoose.Schema({
    des: String,
    time:String,
    userid:String
  });
  const Notes = mongoose.model('Note', notesSchema);
app.post('/notes',async function(req,res){
    const newobj=req.body;
    console.log(newobj)
    if(newobj.des!==undefined || newobj.time!==undefined){
        try{
    const note=new Notes({des:newobj.des,time:newobj.time,userid:newobj.userid});
    const ret=await note.save();
    console.log("   Added");
    res.status(200);
    res.json(ret);
        }catch{
            res.status(501);
            res.send("internal server error");
        }
    }
    else if(newobj.userid!==undefined){
        const notes=await Notes.find({userid:newobj.userid});
        res.status(200);
        res.send(notes);
        console.log("data sent")
    }
    else{
        res.status(400);
        res.send("Bad request");
    }
    
})
app.delete('/notes',async function(req,res){

    let d=req.body;
    console.log(d);
    if(d){
    let deleted=await Notes.deleteOne(d)
    res.status(200);
    res.json({message:"done"});
    console.log("Deleted")
    }
    else{
        res.status(400);
        res.send("Bad Request")
    }
})

const userSchema=new mongoose.Schema({
    email:String,
    password:String,
})
const Users=mongoose.model('user',userSchema);
app.post('/login',async (req,res)=>{
    let {email,password}=req.body;
    const user=await Users.find(
        {
            "email":email,
            "password":password
        } 
    )
    console.log(user)
    if(user.length===0){
        res.status(200);
        res.json({
            message:"User not found",
        });
    }
    else{
        res.status(200);
        res.send({
            message:"User found",
            userId:user[0]._id
        })
    }
})
app.post('/signup',async function(req,res){
    const body=req.body;
    if(body.email!==undefined || body.password!==undefined){
        let u=await Users.find({
            email:body.email,
            password:body.password
        });
        if(u.length===0){
        try{
    const user=new Users({email:body.email,password:body.password});
    const ret=await user.save();
    console.log("User  Added");
    res.status(200);
    res.json({message:"done",userId:ret._id});
        }catch{
            res.status(501);
            res.send("internal server error");
        }
        }
        else{
            res.status(200);
            res.json({message:"already done"});
        }
    }
    else{
        res.status(400);
        res.send("Bad request");
    }
    
})

app.listen(
    80,()=>{
        console.log("sever running");
    }
)