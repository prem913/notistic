import { useState,useEffect} from "react";
import Header from "./header";
import Notes from "./notes";
import Addnotes from "./addnotes"
import Err from "./Err";
import Note from './Note'
import {Fetchdata,Adddata, Deletedata} from '../backend/fetchdata';

function User ({getuserid,setLog}){
    const [notes,setNotes] = useState([]);
    const [err,setErr]=useState('');
useEffect(()=>{
    Fetchdata(setNotes,setErr,getuserid());
},[getuserid])
    function handlelogout(){
        setLog(false);
    }
    async function handleaddnotes(des){
        setErr("Adding");
        console.log("user id"+getuserid())
        let date=new Date().toLocaleString();
        const newobj={
            "time" : date,
            "des" : des,
            "userid":getuserid()
        }
        console.log("before")
        let d=await Adddata(newobj);
        setNotes(notes.concat([d]));
        setErr("Added Successfully");
    }
   async function handledelete(key){
       setErr("deleting...");
       await Deletedata(key);
        Fetchdata(setNotes,setErr,getuserid());
       setErr("deleted");
    }
    return(
        <>
        <Header handlelogout={handlelogout} showuser={true}/>
        <Addnotes addnotes={handleaddnotes}/>
        <Err text={err} />
        <Notes> 
        {
        notes.map((e,i)=>{
            let id=e;
                return(
                    <Note time={e.time} des={e.des} key={e._id} onclick={()=>handledelete(id)} />
                );
            })}
        </Notes>
        </>
    )
}


export default User;