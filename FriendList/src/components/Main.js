import React, {useContext} from 'react';
import {Ctx} from "./Context";

const Main = () => {
    const [friends, setFriends] = useContext(Ctx);

    return (  
        <div className="main">
            <h1>Main Page</h1>
            <p>You have: {friends.length} friends</p>
        </div>
    );
}
 
export default Main;