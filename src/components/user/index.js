import Addnotes from "./addnotes";
import Notes from './notes'
import Note from './Note'
import React from "react";
import Alert from '../Alert';
import UserService from '../../services/user'
export default class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes:[],
            msg:''
        }
        this.addNote=this.addNote.bind(this);
        this.handleDelete=this.handleDelete.bind(this);
    }
    async handleDelete(id){
        this.setState({msg:"Deleting..."});
        try{
        await UserService.delete(id);
        this.setState({msg:"Deleted Successfully"});
        this.setState(prestate=>{
            let prenotes=prestate.notes;
            let newnotes=[];
            newnotes=prenotes.map(e=>{
                if(e._id===id){
                    return {};
                }
                return e;
            })
            return({notes:newnotes})
        })
        }catch(err){
            console.log(err);
            this.setState("Somthing went wrong");
        }
    }
    addNote(data){
        this.setState(prestate=>{
            let newnotes=prestate.notes.concat([data]);
            return({notes:newnotes});
        })
    }
    async componentDidMount(){
        const newnotes=await UserService.get();
        this.setState({notes:newnotes.data});
    }
    render(){
        let newnotes=[];
        let notes=this.state.notes;
        let l=notes.length;
        
        for(let i=l-1;i>-1;i--){
            if(notes[i]._id)
            newnotes.push(<Note idx={i} handleDelete={this.handleDelete} title={notes[i].title} des={notes[i].des} time={notes[i].time} key={notes[i]._id} id={notes[i]._id} />);
        }
    return (
        <>
        <Addnotes setAlert={(s)=>this.setState({msg:s})} addNote={this.addNote}/>
        <Alert msg={this.state.msg}/>
        <Notes >
            {newnotes}
          {/* {this.state.notes.map(ele=><Note title={ele.title} des={ele.des} time={ele.time} id={ele._id} />)}   */}
        </Notes>
        </>
    )
    }
}