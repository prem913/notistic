import { useState } from "react";
import AuthService from '../../services/auth';
import Alert from '../Alert';
export default function Signup(){
    const [value,setValue]=useState("");
    const [email,setEmail]=useState("");
    const [pswd,setPswd]=useState("");
    const [cpswd,setCpswd]=useState("");
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
        if(pswd!==cpswd){
                setMsg("Passwords didn't Match!");
                return;
            }
        setDisabled(true);
        try{
        const data =await AuthService.register(value,email,pswd);
        setMsg(data.message);
        setDisabled(false);
        }catch(err){
            setDisabled(false);
            const error=err.response.data.message;
            setMsg(error?error:"Couldn't connect to Server");
            return;
        }
    }
    return(
        <>
        <Alert msg={msg}/>
            <form onSubmit={(e)=>handleclick(e)} action="/login" method="POST">
                <h1 style={{textAlign:"center"}}>SignUp</h1>
                <input required type="text" placeholder="Username" value={value} onChange={(e)=>setValue(e.target.value)}></input>
                <input required type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input required type="password" placeholder="Password" value={pswd} onChange={(e)=>setPswd(e.target.value)}></input>
                <input required type="password" placeholder="Confirm Password" value={cpswd} onChange={(e)=>setCpswd(e.target.value)}></input>
                <button type="submit" disabled={disabled} className="btn">Sign Up</button>
            </form>
        </>
    )
}