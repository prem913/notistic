import deleteimg from '../../icons/delete_black_24dp.svg';
export default function Note({title,des,time,handleDelete,id}){
    let fortime=new Date(time);
    let t=fortime.toLocaleTimeString();
    let d=fortime.getDate();
    let nowtime=new Date().getDate()
    if(d===nowtime){
        d="Today"
    }
    else{
        d=fortime.getDate()+"/"+fortime.getMonth()
    }
    return(
        <div className="notes">
            <b>{title}</b>
            <hr></hr>
            <p>{des}</p>
            <br></br>
            {d+"  "}{t}
            <button className="img" ><img src={deleteimg} onClick={()=>handleDelete(id)} alt="delete"></img></button> 
        </div>
    );
};