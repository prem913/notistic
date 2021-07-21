
export default function Err(props){
        return(
            <div className="Err" style={props.text===""? {display:"none"}: {display:"block"}}>{props.text}</div>
        )
}