import { useState } from 'react';
import User from './components/user';
import Login from "./components/login"
function App() {
  const [logged,setLog]=useState(false);
  return (
    <>
    {logged? <User />:<Login setLog={setLog}/>}
    </>
  );
}

export default App;
