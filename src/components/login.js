import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import "../css/login.css";
import Err from './Err'
import Signup from "./signup";
import {Handlelogin,Handlesignup} from '../backend/fetchdata'
export default function Login(props){
    const [value,setValue]=useState("");
    const [pswd,setPswd]=useState("");
    const [action,setAction]=useState(true);
    const [err,setErr]=useState(false);
    const [disabled,setdisabled]=useState(false);
    async function handlesubmit(e,email,pass,a){
        e.preventDefault();
        if(email!=='' && pass!==''){
            if(email.length<9){
                setErr("Username should have atleast 8 characters.")
            }
            else if(pass.length<9){
                setErr("Password should have atleast 8 characters.")
            }
            else{
            setdisabled(true);
            if(a==="login"){
                let {res,err}=await Handlelogin(email,pass);
            if(res.message==="User found"){
                props.setLog(true);
            }
            else{
                setErr("Username or password wrong!!");
                setdisabled(false);
            }
            }
            else{
                let {res,err}=await Handlesignup(email,pass);
            if(res.message==="done"){
                setErr("Successfully done")
                let {res,err}=await Handlelogin(email,pass);
                if(res.message==="User found"){
                    props.setLog(true);
                }
                setdisabled(false);
            }
            else if(res.message==="already done"){
                setErr("User already signedup")
            }
            else{
                setErr("signup failed!!")
                setdisabled(false);
            }
            }
            }
        }
    }
    return(
        <div className="login">
            <div className="form" style={action?{height:"350px"}:{height:"400px"}} >

                <div className="switch">
                    <div className={action?"switch-btn active":"switch-btn"} onClick={()=>{setErr("");setAction(true)}}>Login</div>
                    <div className={!action?"switch-btn active":"switch-btn"} onClick={()=>{setErr("");setAction(false)}}>Sign Up</div> 
                </div>
                
            {err && <Err text={err}></Err>}
            <CSSTransition in={action} timeout={300} classNames="slideleft" unmountOnExit >
                <div className="box">
                <h1 style={{textAlign:"center"}}>Login</h1>
            <form  onSubmit={(e)=>handlesubmit(e,value,pswd,"login")} action="/login" method="POST">
                <input type="text" placeholder="Username" required value={value}  onChange={(e)=>setValue(e.target.value)}></input>
                <input required type="password" placeholder="Password" value={pswd}  onChange={(e)=>setPswd(e.target.value)}></input>
                <button type="submit" className="btn" disabled={disabled}>Login</button>
            </form>
                </div>
                </CSSTransition>
                
            <CSSTransition in={!action} timeout={300} classNames="slideright" unmountOnExit >
                <Signup handlesubmit={handlesubmit} disabled={disabled} setErr={setErr}/>
                </CSSTransition>
        </div>
            </div>
    )
}