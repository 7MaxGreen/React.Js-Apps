import React, {useState, useEffect, createContext} from 'react';
import {users} from "./Data";

export const Ctx = createContext();


const Context = ({children}) => {

    

    const [friends, setFriends] = useState(
        localStorage.getItem("friends") ? JSON.parse(localStorage.getItem("friends")) : users
    );

    return (  
        <Ctx.Provider value={[friends, setFriends]}>
            {children}
        </Ctx.Provider>
    );
}
 
export default Context;