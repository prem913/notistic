import React from "react";
export default class Addnotes extends React.Component{
    constructor(props){
        super(props);
        this.state={
            des: ""
        }
    }

    storenotes=(e)=>{
        this.setState({des:e.target.value});
        
    }
    handleclick=()=>{
        if(this.state.des===''){
            alert("nothing added");
        }
        else{
        this.props.addnotes(this.state.des);   
        this.setState({des:""});
        }
    }
    shouldComponentUpdate(nextprop,nextstate){
        if(nextstate.des===this.state.des){
            return false;
        }
        return true;
    }
    componentDidMount(){
    }
    
render(){
    return(
        <>
        <div className="container">
        <input type="text" placeholder="Enter Your Notes..." onChange={this.storenotes} value={this.state.des}></input>
        <button className="btn" onClick={this.handleclick}>Add</button>
        </div>
        </>
    );
}
}