import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ToDoLeftMenu.css'

function ToDoLeftMenu(props) {
    function createMenuItem(icon, text, isActive) {
        return (
            <a className={isActive ? 'todo-leftmenu-item active' : 'todo-leftmenu-item'} >
                <FontAwesomeIcon className='todo-leftmenu-item-img' icon={icon}/>
                <span className='todo-leftmenu-item-text'>{text}</span>
            </a>
        )
    }
    
    return (
        <div className={props.className}>
            {props.menuItems.map((item) => createMenuItem(item.icon, item.text, item.isActive))}
        </div>
    )
}

export default ToDoLeftMenu
