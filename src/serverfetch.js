
fetchdata(txt){
    fetch('http://localhost/notes').then(response=>response.json()).then(data=>this.setState({notesdata:data,text:txt})).catch(err=>this.setState({text:"Unable to get notes"}));
}