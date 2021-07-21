
function fetchdata(setNotes,setErr){
    fetch('http://localhost/notes').then(response=>response.json()).then(data=>setNotes(data)).catch(err=>setErr("Unable to get your Notes"));
}
async function adddata(obj){
     const d=await fetch('http://localhost/notes',{ 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
        })
        .then(response=>response.json())

        return d;
}
async function deletedata(key){
    let e;
    await fetch('http://localhost/notes',{
        method:"DELETE",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(key)
    })
    .then(response=>response.json)
    .then()
    .catch(err=>e=err);
    return e?e:"done";
}
export const Fetchdata = fetchdata;
export const Adddata = adddata;
export const Deletedata= deletedata;