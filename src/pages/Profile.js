import React from 'react'
import NavbarSignUp from '../components/NavbarSignUp'
import ToDoLeftMenu from '../components/ToDoLeftMenu'
import ToDoProfile from '../components/ToDoProfile'
import { faUser, faSliders } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

function Profile() {
    const menuItems = [
        { icon: faUser, text: 'Profile', isActive: true },
        { icon: faSliders, text: 'Settings', isActive: false }
    ]
    return (
    <>
        <div className='navbar-container'>
            <NavbarSignUp />
        </div>
        <div className='container'>
            <div className='todo-list-wrapper'>
                <ToDoLeftMenu menuItems={menuItems}/>
                <ToDoProfile />
            </div>
        </div>
    </>
    )
}

export default Profile
