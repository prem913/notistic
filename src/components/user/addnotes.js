import React from "react";
import UserService from '../../services/user'
export default class Addnotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            des: "",
            title: "",
            disabled:false
        }
    }

    setDes=(e)=>{
        this.setState({des:e.target.value});
    }
    setTitle=(e)=>{
        this.setState({title:e.target.value});
    }
    handleclick=async (e)=>{
        e.preventDefault();
        this.props.setAlert("Adding...");
        if(this.state.title===''){
            alert("Title cannot be empty");
            return;
        }
        if(this.state.des===''){
            alert("Notes cannot be empty");
            return;
        }
        this.setState({disabled:true});
        try{
        let response=await UserService.add(this.state.title,this.state.des);
        this.setState({
            des:'',
            title:'',
            disabled:false
        })
        this.props.setAlert("Added Successfully.")
        this.props.addNote(response.data);
        }catch(err){
            this.props.setAlert("Something Went Wrong!")
            this.setState({disabled:false});
        }
    }
render(){
    return(
        <>
        <div className="container">
        <form onSubmit={this.handleclick}>
        <input required disabled={this.state.disabled} type="text" placeholder="Title" onChange={(e)=>this.setState({title:e.target.value})} value={this.state.title}></input>
        <input required disabled={this.state.disabled} type="text" placeholder="Enter Your Notes..." onChange={this.setDes} value={this.state.des}></input>
        <button disabled={this.state.disabled} type="submit" className="btn" >Add</button>
        </form>
        </div>
        </>
    );
}
}