// import React, { useEffect,useState } from "react"
// import { auth } from "../backend/authentication";
// const AuthContext=React.createContext()

// export function useAuth(){
//     return useContext(Authcontext)
// }

// export function AuthProvider({Children}){
//     const [currentUser,setCurrentUser]=useState();
//     function signup(email,password){
//        return auth.createUserWithEmailAndPassword(email,password);
//     }
    
//     useEffect(() => {
//         const unsubscrbe=auth.onAuthStateChanged(user=>{
//         setCurrentUser(user)
//     })
//     return unsubscrbe;
//     }, [])
//     const value={
//         currentUser
//     }
//     return(
//         <AuthContext.Provider value={value}>
//             {Children}
//         </AuthContext.Provider>
//     )
// }