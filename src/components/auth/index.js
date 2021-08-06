import Login from "./login";
import Signup from "./signup";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import "../../css/login.css";
export default function Auth({setLog}){
    const [action,setAction]=useState(true);
    return(
        <div className="login">
            <div className="form" style={action?{height:"390px"}:{height:"480px"}}>
                <div className="switch">
                    <div className={action?"switch-btn active":"switch-btn"} onClick={()=>{setAction(true)}}>Login</div>
                    <div className={!action?"switch-btn active":"switch-btn"} onClick={()=>{setAction(false)}}>Sign Up</div> 
                </div>
            <CSSTransition in={action} timeout={400} classNames="slideleft" unmountOnExit >
                <div className="box">
                    <Login setLog={setLog}/>
                </div>
                </CSSTransition>
                
            <CSSTransition in={!action} timeout={400} classNames="slideright" unmountOnExit >
                <div className="box">
                    <Signup/>
                </div>
                </CSSTransition>
        </div>
            </div>
    )
}