import React from 'react'
import { Button } from './Button'
import SectionText from './SectionText';
import './GetStarted.css'

function GetStarted() {
    return (
        <section className='getstarted'>
              <div className='container'>
                  <div className='getstarted-wrapper'>
                      <img className='getstarted-img' src='getstarted.png'/>
                      <SectionText text={['Achieve your target',<br/>, 'and won your life']}/>
                      <Button buttonStyle='btn--primary' buttonSize='btn--large'>Get Started</Button>
                  </div>      
              </div>      
        </section>
    )
}

export default GetStarted
