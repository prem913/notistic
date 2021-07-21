import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import "../css/login.css";
export default function Login(props){
    const [value,setValue]=useState("");
    const [pswd,setPswd]=useState("");
    const [action,setAction]=useState(true);
    function handleinput(e){
        setValue(e.target.value);
    }
    function handlepass(e){
        setPswd(e.target.value);
    }
    function handlesubmit(e){
        e.preventDefault();
        props.setLog(true);

    }
    console.log(value);
    return(
        <div className="login">
            <form className="form" action="/login" method="POST">
                <div className="switch">
                    <div className={action?"switch-btn active":"switch-btn"} onClick={()=>setAction(true)}>Login</div>
                    <div className={!action?"switch-btn active":"switch-btn"} onClick={()=>setAction(false)}>Sign Up</div> 
                </div>
                
            <CSSTransition in={action} timeout={300} classNames="slideleft" unmountOnExit >
                <div className="box">
                <h1 style={{textAlign:"center"}}>Login</h1>
                <input type="text" placeholder="Username" value={value} onChange={(e)=>handleinput(e)}></input>
                <input type="password" placeholder="Password" value={pswd} onChange={(e)=>handlepass(e)}></input>
                <button type="submit" className="btn" onClick={handlesubmit}>Login</button>
                </div>
                </CSSTransition>
                
            <CSSTransition in={!action} timeout={300} classNames="slideright" unmountOnExit >
                <div className="box">
                <h1 style={{textAlign:"center"}}>SignUp</h1>
                <input type="text" placeholder="Username" value={value} onChange={(e)=>handleinput(e)}></input>
                <input type="password" placeholder="Password" value={pswd} onChange={(e)=>handlepass(e)}></input>
                <button type="submit" className="btn" onClick={handlesubmit}>Sign Up</button>
                </div>
                </CSSTransition>
            </form>
        </div>
    )
}