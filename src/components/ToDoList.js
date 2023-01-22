import React from 'react'
import Modal from 'react-modal'
import ToDoListItem from './ToDoListItem'
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faTimes } from '@fortawesome/free-solid-svg-icons'
import ToDoItems from '../todos.js'
import './ToDoList.css'

function createTodoItem (item) {
    return <ToDoListItem 
        key = {item.id}
        caption = {item.caption}
        content = {item.content}
        isActive = {item.isActive}
        date = {item.date}
    />
}

Modal.setAppElement(document.getElementById('root'));

function ToDoList() {
    library.add(faCirclePlus);
    let allItems = ToDoItems.length;
    let doneItems = ToDoItems.filter(item => item.isActive === false).length;

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }  

    return (
        <div className='todo-list'>
            <span className='todo-list-date'>Today</span>
            <span className='todo-list-completed'>{doneItems}/{allItems} completed</span>
            <div className='todo-list-items'>
                {ToDoItems.map(createTodoItem)}
            </div>
            <a className='todo-list-add-item' onClick={openModal}>
                <FontAwesomeIcon icon={faCirclePlus} />
                <span>Add task</span>
            </a>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className='add-task-window'
                >
                <div className='add-task-window-header'>
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Add task</h2>
                    <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
                </div>

                <form>
                    <label for='caption'>Caption:</label>
                    <input className='add-task-window-form-input-text' type='text' id='caption'/>
                    <label for='content'>Content:</label>
                    <input className='add-task-window-form-input-text' type='text' id='content'/>
                    <label for='date'>Date:</label>
                    <input type='date' id='date' placeholder=''></input>
                    <input type="submit" value='Add Task'></input>
                </form>
            </Modal>
        </div>
    )
}

export default ToDoList
