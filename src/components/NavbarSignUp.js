import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSliders, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import './NavbarSignUp.css'

function NavbarSignUp() {
    library.add(faUser, faSliders, faRightFromBracket);

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
        setIsHovering(false);
    };

    return (
    <div className="todo-menu-wrapper active">
        <div className="todo-menu-logo"> 
            <Link to="/" className="todo-logo">
                <i className="fa-sharp fa-solid fa-bars"/> <h1 className="todo-menu-name">Todo Daily</h1>
            </Link> 
        </div>
        <div className="todo-menu-user"> 
            <span className='todo-menu-username'>Julia</span>
            <img className='todo-menu-userpic' src='img1.png' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}></img>
            {isHovering && (<ul className="todo-menu-user-menu">
                <li>
                    <Link to='#'>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to='profile'>
                        <FontAwesomeIcon icon={faSliders} />
                        <span>Settings</span>
                    </Link>

                </li>
                <li>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        <span>Logout</span>
                    </Link>
                </li>
            </ul>)}
        </div>
    </div>
    )
}

export default NavbarSignUp
