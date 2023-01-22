import React, { useState } from 'react'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './ToDoListItem.css'


function ToDoListItem(props) {
    library.add(faPenToSquare, faTrashCan);
    const [todoItemClick, setTodoItemMenuClick] = useState(false);
    const handleTodoItemClick = () => setTodoItemMenuClick(!todoItemClick);

    return (
    <div className={ todoItemClick ? 'todo-list-item done' : 'todo-list-item'}  onChange={handleTodoItemClick}>
        <label><input className='todo-list-item-checkbox' type='checkbox' defaultChecked={ todoItemClick ? true : false} onChange={handleTodoItemClick}></input></label>
        <div className='todo-list-item-text'>
            <span className='todo-list-item-caption'>{props.caption}</span>
            <span className='todo-list-item-content'>{props.content}</span>
            <div className='todo-list-item-buttons'>
                <FontAwesomeIcon className='todo-list-item-edit' icon={faPenToSquare}/>
                <FontAwesomeIcon className='todo-list-item-delete' icon={faTrashCan} />
            </div>
        </div>
    </div>
    )
}

export default ToDoListItem
