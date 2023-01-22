import React from 'react'
import Hero from '../components/Hero';
import Step from '../components/Step';
import GetStarted from '../components/GetStarted';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../App.css'

function Home() {
return (
    <>
        <Navbar />
        <Hero />
        <Step />
        <GetStarted />
        <Footer />
    </>
    )
}

export default Home
