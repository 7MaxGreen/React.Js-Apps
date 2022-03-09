import React, {useState, useRef, useContext} from 'react';
import {Ctx} from "./Context";
import {useParams} from "react-router-dom";

const Change = () => {
    
    const [friends, setFriends] = useContext(Ctx);
    const form = useRef();
    const {id} = useParams();
    let currentFriend = friends.filter(friend => friend.id == id)[0];



    function changeData(nickname, email) {
        let temp = friends;

        for(let i=0; i<temp.length; i++) {
            if(temp[i].id === parseInt(id)){
                temp[i].nickname = nickname;
                temp[i].email = email;
            }
        }

        setFriends(temp);
        localStorage.setItem("friends", JSON.stringify(friends));
    }

    return (  
    
    <div className="change">
        <h1>Edit Friend data</h1>
        <hr/>
        <form ref={form} onSubmit={(e) => e.preventDefault()}>
            <input type="text" name="nickname" defaultValue={currentFriend.nickname}/>
            <br/>
            <input type="email" name="email" defaultValue={currentFriend.email} />
            <br/>
            <button onClick={() => changeData(form.current["nickname"].value, form.current["email"].value)}>Confirm Edit</button>
        </form>
    </div> );
}
 
export default Change;