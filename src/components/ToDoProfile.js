import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './ToDoProfile.css'

function ToDoProfile() {
    return (
        <div className='todo-profile'>
            <img className='todo-profile-userpic' src='dnd.png' />
            <form>
                <input className='todo-profile-name' type='text' placeholder='Enter your name'></input>
                <input className='todo-profile-username' type='text' placeholder='Enter your username'></input>
                <div className='todo-profile-buttons'>
                    <Button buttonStyle='btn--primary' link='/todo'>Apply</Button>
                    <Button buttonStyle='btn--outline'>Cancel</Button>
                </div>
            </form>
        </div>
    )
}

export default ToDoProfile
