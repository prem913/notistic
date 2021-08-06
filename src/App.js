import Auth from "./components/auth";
import Header from './components/header'
import User from './components/user/index'
import './css/main.css'
import UserService from './services/user'
import React from "react";
import auth from "./services/auth";
import Alert from './components/Alert'
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      log:false,
      msg:''
    }
    this.setLog=this.setLog.bind(this)
  }
  setLog(flag){
    if(!flag)
    auth.logout();
    this.setState({log:flag})
  }  
  async isLogged(){
    if(auth.getCurrentUser()){
    this.setState({msg:"Logging in"});
    try{
        await UserService.get();
        return true;
    }
    catch(err){
      this.setState({msg:"Session expired please Login"});
        return false;
    }
  }
  return false;
    
}
async componentDidMount(){
    let flag=await this.isLogged();
    if(flag){
      this.setState({log:true})
    }
  }
  render(){
  return (
    <>
    <Header logged={this.state.log} setLog={this.setLog}/>
    {this.state.log?<User />:(
    <>
    <Alert msg={this.state.msg}/>
    <Auth setLog={this.setLog}/>
    </>
    )}
    </>
  );
}
}
export default App;
