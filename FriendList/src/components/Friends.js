import React, {useState, useContext} from 'react';
import {Ctx} from "./Context";
import Friend from "./Friend";

const Friends = () => {

    const [friends, setFriends] = useContext(Ctx);

    return (  
        <div className="friends">
              <h1>Friends List</h1>
              <hr style ={{
                  border: 0,
                  borderTop: "2px solid"
              }}/>

              {
                  friends.map(friend => <Friend key={friend.id} friend={friend} />)
              }
        </div>
    );
}
 
export default Friends;