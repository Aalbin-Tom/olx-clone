import { createContext, useState } from "react";

export const FirebaseContext =createContext(null);
export const AuthContxt =  createContext(null)



export default function Context({children}){
    const [user,setUser]= useState(null)

    return(
        <AuthContxt.Provider value={{user,setUser}}>
            {children}
        </AuthContxt.Provider>
    )
}