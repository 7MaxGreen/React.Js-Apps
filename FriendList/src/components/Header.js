import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <h1>Websites</h1>
            
            <ul>

                <li>
                    <Link to="/">Main</Link>
                </li>

                <li>
                    <Link to="/friends">Friends</Link>
                </li>

                <li>
                    <Link to="/add-friend">Add your friend</Link>
                </li>

            </ul>
        </header>
     );
}
 
export default Header;