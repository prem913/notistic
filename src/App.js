import { useState } from 'react';
import User from './components/user';
import Login from "./components/login"
import Header from './components/header'
function App() {
  const [logged,setLog]=useState(false);
  const [userid,setUserid]=useState("");
  
  function  handlelog(p,id) {
    setUserid(id);
    setLog(p);
  }
  function getuserid(){
    if(userid)
    return userid;
    else{
      return "not assainged"
    }
    }
  return (
    <>
    {logged?"":<Header />}
    {logged? <User getuserid={getuserid} setLog={handlelog}/>:<Login setLog={handlelog}/>}
    </>
  );
}

export default App;
