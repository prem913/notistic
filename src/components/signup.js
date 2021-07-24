import { useState } from "react";
import "../css/login.css";
export default function Signup({handlesubmit,disabled,setErr}){
    const [value,setValue]=useState("");
    const [pswd,setPswd]=useState("");
    const [cpswd,setCpswd]=useState("");
    function handleclick(e){
        e.preventDefault();
        if(pswd===cpswd){
        handlesubmit(e,value,pswd,"signup");
        }
        else{
            setErr("Passwords didn't match!")
        }
    }
    return(
            <form onSubmit={(e)=>handleclick(e)} action="/login" method="POST">
                <div className="box">
                <h1 style={{textAlign:"center"}}>SignUp</h1>
                <input required type="text" placeholder="Username" value={value} onChange={(e)=>setValue(e.target.value)}></input>
                <input required type="password" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}></input>
                <input required type="password" placeholder="Confirm Password" value={cpswd} onChange={(e)=>setCpswd(e.target.value)}></input>
                <button type="submit" disabled={disabled} className="btn">Sign Up</button>
                </div>
            </form>
    )
}