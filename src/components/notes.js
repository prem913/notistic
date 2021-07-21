
import '../css/main.css';
function Notes(props){
    return(
        <>
        <fieldset className="notescontainer">
        <legend>YOUR NOTES</legend>
        {props.children}
        </fieldset>
        </>
    );
        }
export default Notes;