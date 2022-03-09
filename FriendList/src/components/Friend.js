import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Friend = ({friend}) => {

    const[showLangs, setShowLangs] = useState(false);

    return ( 
    
    <div className="friend">
        <h2>{friend.nickname}</h2>
        <p>{friend.email}</p>
       
        <button onClick={() => setShowLangs(!showLangs)}>
            {
                showLangs ? "Hide known coding languages" : "Show known coding languages"
            }
        </button>

        {
            showLangs ? 

            <div className="languages">
            <ul>
                {
                    friend.languages.map((language,idx) => <li key ={idx}>{language}</li>)
                }
            </ul> 
        </div> : 
        ""
        }

        <button><Link to={`/friends/${friend.id}`}>Details</Link></button>
        
    </div> );
}
 
export default Friend;