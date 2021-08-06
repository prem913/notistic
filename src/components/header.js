import React,{useState} from "react";
import { CSSTransition } from 'react-transition-group';
import Usernav from './user/usernav';
import { ReactComponent as Usericon } from "../icons/account_circle_white_36dp.svg";
export default function Header({logged,setLog}){
    const [nav,setNav]=useState(false);
    function handlelog(){
        setNav(false);
        setLog(false);
    }
    return(
        <div className="header">
            <h1>Notistic</h1>
            {logged?<Usericon className="usericon" onClick={()=>setNav(!nav)}/>:""}
            <CSSTransition in={nav} timeout={300} classNames="nav" unmountOnExit >
                <Usernav setLog={handlelog}/>
            </CSSTransition>
        </div>
    )    
}