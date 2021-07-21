
import deleteimg from '../icons/delete_black_24dp.svg';
export default function Note(props){
    return(
        <div className="notes">
            <b>{props.time}</b>
            <hr></hr>
            <p>{props.des}</p>
            <button className="img" onClick={props.onclick}><img src={deleteimg} alt="delete"></img></button> 
        </div>
    );
};