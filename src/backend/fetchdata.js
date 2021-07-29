const CONNECTION_URL="https://notisticserver.herokuapp.com/"
function fetchdata(setNotes,setErr,id){
    fetch(CONNECTION_URL+'notes',{
      
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"userid":id}),
    })
    .then(response=>response.json()).then(data=>setNotes(data)).catch(err=>setErr("Unable to get your Notes"+err));
}
async function adddata(obj){
     const d=await fetch(CONNECTION_URL+'notes',{ 
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
    await fetch(CONNECTION_URL+'notes',{
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
async function handlelogin(email,password){
  let err;
  let res=await fetch(CONNECTION_URL+'login',{
      method:"Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:email,password:password})
  })
  .then(response=>response.json()).catch(e=>err=e);
  return {res,err};


}
async function handlesignup(email,password){
  let err;
  let res=await fetch(CONNECTION_URL+'signup',{
      method:"Post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:email,password:password})
  })
  .then(response=>response.json()).catch(e=>err=e);
  return {res,err};
}
export const Handlesignup=handlesignup;
export const Handlelogin=handlelogin;
export const Fetchdata = fetchdata;
export const Adddata = adddata;
export const Deletedata= deletedata;