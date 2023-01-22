import React from 'react';
import { Button } from './Button';
import SectionText from './SectionText';
import './Hero.css';

function Hero() {
    return (
        <section className='hero'>
            <div className='container'>
                <SectionText text={['Organizing your day activity', <br/>,  'with Todo Daily']}/>
                <Button buttonStyle='btn--primary' buttonSize='btn--large'>Get started</Button>
                <img src='hero-bg.png'></img>
            </div>
        </section>
    )
}

export default Hero
