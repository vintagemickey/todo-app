import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import ToDo from './pages/ToDo';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' exact element={<Home />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/todo' element={<ToDo />}/>
            <Route path='/profile' element={<Profile />}/>
        </Routes>
    </Router>
    </>
  )
}

export default App