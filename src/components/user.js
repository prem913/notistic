import { useState,useEffect} from "react";
import Header from "./header";
import Notes from "./notes";
import Addnotes from "./addnotes"
import Err from "./Err";
import Note from './Note'
import {Fetchdata,Adddata, Deletedata} from '../backend/fetchdata';

function User (){
    const [notes,setNotes] = useState([]);
    const [err,setErr]=useState('');

useEffect(()=>{
    console.log("mou")
    Fetchdata(setNotes,setErr);
},[])

    async function handleaddnotes(des){
        setErr("Adding");
        let date=new Date().toLocaleString();
        const newobj={
            "time" : date,
            "des" : des,
        }
        console.log("before")
        let d=await Adddata(newobj);
        setNotes(notes.concat([d]));
        setErr("Added Successfully");
    }
   async function handledelete(key){
       setErr("deleting...");
       await Deletedata(key);
        Fetchdata(setNotes,setErr);
       setErr("deleted");
    }
    return(
        <>
        <Header />
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