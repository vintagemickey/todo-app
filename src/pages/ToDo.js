import React, {useEffect, useState} from 'react'
import ToDoLeftMenu from '../components/ToDoLeftMenu'
import ToDoList from '../components/ToDoList'
import NavbarSignUp from '../components/NavbarSignUp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCalendarDays, faCalendarWeek, faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
import "./ToDo.css"

function ToDo() {
    const menuItems = [
        { icon: faCalendar, text: 'Today', isActive: true },
        { icon: faCalendarDays, text: 'Yesterday', isActive: false },
        { icon: faCalendarWeek, text: 'Upcoming', isActive: false }
    ]
    const [menuClick, setMenuClick] = useState(false);
    const handleMenuClick = () => setMenuClick(!menuClick);

    const [menuButton, setMenuButton] = useState(false);

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
        <>
            <div className='navbar-container'>
                <NavbarSignUp />
            </div>
            <div className='container'>
                <div className='todo-list-wrapper'>
                    {menuButton && 
                    <div className="todo-menu-icon" onClick={handleMenuClick}>
                        {menuClick ? <FontAwesomeIcon icon={faTimes}/> : <FontAwesomeIcon icon={faBars}/>}
                    </div>}
                    <ToDoLeftMenu menuItems={menuItems} className={menuClick ? 'todo-leftmenu active' : 'todo-leftmenu'}/>
                    <ToDoList />
                </div>
            </div>
        </>
    )
}

export default ToDo
