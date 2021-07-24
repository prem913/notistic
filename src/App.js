import { useState ,useEffect} from 'react';
import User from './components/user';
import Login from "./components/login"
import Header from './components/header'
function App() {
  const [logged,setLog]=useState(false);
  function  handlelog(p) {
    setLog(p);
  }
  return (
    <>
    {logged?"":<Header />}
    {logged? <User setLog={handlelog}/>:<Login setLog={handlelog}/>}
    </>
  );
}

export default App;
