import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

function Navbar(props) {
    const [menuClick, setMenuClick] = useState(false);
    const [menuButton, setMenuButton] = useState(false);
    const handleMenuClick = () => setMenuClick(!menuClick);
    const closeMobileMenu = () => setMenuClick(false);

    const signedUp = true;
    const notSignedUp = false;

    const showMenuButton = () => {
        if (window.innerWidth <= 960) {
            setMenuButton(true);
        } else {
            setMenuButton(false);
        }
    }

    useEffect (() => {
        showMenuButton()
    }, [])
    window.addEventListener('resize', showMenuButton);
    
    return (
    <div className="container">
        <div className="header-menu-wrapper">
            <div className="header-menu-logo"> 
            <Link to="/" className="header-logo">
                <i className="fa-sharp fa-solid fa-bars"/> <h1 className="header-name">Todo Daily</h1>
            </Link> 
            </div>
            <nav className={menuClick ? 'header-menu active' : 'header-menu'}>
                <div>
                    <ul className="header-menu-items">
                        <Link to="/" onClick={closeMobileMenu}><li className="header-menu-item">Features</li></Link>
                        <Link to="/" onClick={closeMobileMenu}><li className="header-menu-item">Pricing</li></Link>
                        <Link to="/signup" state={signedUp} onClick={closeMobileMenu}><li className="header-menu-item active">Login</li></Link>
                        <Link to="/signup" state={notSignedUp} onClick={closeMobileMenu}><li className="header-menu-item">Signup</li></Link>
                    </ul>
                </div>
            </nav>
            {menuButton && 
            <div className="header-menu-icon" onClick={handleMenuClick}>
                <i className={menuClick ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>}
        </div>
    </div>
  )
}

export default Navbar
