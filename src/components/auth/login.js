import { useState } from "react";
import AuthService from '../../services/auth';
import Alert from '../Alert';
export default function Login({setLog}){
    const [value,setValue]=useState("");
    const [pswd,setPswd]=useState("");
    const [disabled,setDisabled]=useState(false);
    const [msg,setMsg]=useState("");
    async function handleclick(e){
        e.preventDefault();
        if(value.length<8){
            setMsg("Username should have atleast 8 characters");
            return;
        }
        if(pswd.length<8){
            setMsg("Password should have atleast 8 characters");
            return;
        }
        setDisabled(true);
        try{
        await AuthService.login(value,pswd);
        setMsg("Logging in...");
        setLog(true);
        }catch(err){
            const error=err && err.response?err.response.data.message:"Couldn't connect to Server";
            console.log(err);
            setMsg(error);
            setDisabled(false);
            return;
        }
    }
    return(
        <>
        <Alert msg={msg}/>
            <form onSubmit={(e)=>handleclick(e)} action="/login" method="POST">
                <h1 style={{textAlign:"center"}}>Login</h1>
                <input required type="text" placeholder="Username" value={value} onChange={(e)=>setValue(e.target.value)}></input>
                <input required type="password" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}></input>
                <button type="submit" disabled={disabled} className="btn">Login</button>
            </form>
        </>
    )
}