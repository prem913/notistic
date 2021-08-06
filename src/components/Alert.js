export default function Err(props){
        return(
            <div className="Err" style={props.msg===""? {display:"none"}: {display:"block"}}>{props.msg}</div>
        )
}