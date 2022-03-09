import React, {useState, useRef, useContext, useEffect} from 'react';
import {Ctx} from "./Context";

const AddFriend = () => {

    const form = useRef();
    const [languages, setLanguages] = useState([]);
    const [friends, setFriends] = useContext(Ctx);

    useEffect(() => {
        localStorage.setItem("friends", JSON.stringify(friends));
    }, [friends])


    function addRemLang(e){
        if(e.target.checked) {setLanguages([...languages, e.target.value])}
          else {
            for ( let i =0; i<languages.length; i++) {
            if(languages[i] === e.target.value) {
                let temp = languages;
                temp.splice(i, 1);
                setLanguages(temp);
            }
          }
       }
    }

    function addFriend(nickname, email){
        const newFriend = {
            id: Date.now(),
            nickname,
            email,
            languages
        };

        setFriends([...friends, newFriend]);
        document.getElementById("form").reset();
    }



    return ( <div className="add-friend">
        <h1>Add Friend</h1>
        <hr/>
        <form id="form" ref={form} autoComplete="off" onSubmit={e => e.preventDefault()}>
            
            <input type="text" name="nickname" placeholder="Nickname" />
            
            <input type="email" name="email" placeholder="Email" />
            <br />
            <br />
            Programming Languages:
            <br />
            <br />
            <input type="checkbox" name="languages" value="HTML, CSS" onChange={(e) => addRemLang(e)}/>&nbsp;HTML, CSS 
            <br />
            <input type="checkbox" name="languages" value="Javascript" onChange={(e) => addRemLang(e)}/>&nbsp;Javascript
            <br />
            <input type="checkbox" name="languages" value="C++" onChange={(e) => addRemLang(e)}/>&nbsp;C++
            <br />
            <input type="checkbox" name="languages" value="C#" onChange={(e) => addRemLang(e)}/>&nbsp;C#
            <br />
            <input type="checkbox" name="languages" value="Java" onChange={(e) => addRemLang(e)}/>&nbsp;Java
            <br />
            <input type="checkbox" name="languages" value="Python" onChange={(e) => addRemLang(e)}/>&nbsp;Python
            <br />
            <input type="checkbox" name="languages" value="PhP" onChange={(e) => addRemLang(e)}/>&nbsp;PhP
            <br />
            <button type="submit" onClick={() => 
                addFriend(
                          form.current["nickname"].value, 
                          form.current["email"].value)
            }>Add friend</button>

        </form>
    </div> );
}
 
export default AddFriend;