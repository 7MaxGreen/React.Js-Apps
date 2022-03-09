import React, {useEffect, useContext, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import {Ctx} from "./Context";

const FriendPage = () => {
    const {id} = useParams();
    const [friends, setFriends] = useContext(Ctx);
    let currentFriend = friends.filter(friend => friend.id == id)[0];

    useEffect(() => {
       
    }, []);

    return ( 
        <div className="friendPage">
            <h1>{currentFriend.nickname}</h1>
            <p>{currentFriend.email}</p>
            <h4>Known programming languages: </h4>
            <ul>
                {
                    currentFriend.languages.map((language,idx) => <li key={idx}>{language}</li>)
                }
            </ul>
            <Link to={`/friends/${id}/change`}>Edit Data</Link>
        </div>
     );
}
 
export default FriendPage;