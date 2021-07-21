import React,{useState} from "react";
import { CSSTransition } from 'react-transition-group';
import "../css/main.css";
import Usernav from './usernav';
import { ReactComponent as Usericon } from "../icons/account_circle_white_36dp.svg";
export default function Header(){
    const [nav,setNav]=useState(false);
    return(
        <div className="header">
            <h1>Notistic</h1>
            <Usericon className="usericon" onClick={()=>setNav(!nav)}/>
            <CSSTransition in={nav} timeout={300} classNames="nav" unmountOnExit >
                <Usernav />
            </CSSTransition>
        </div>
    )    
}