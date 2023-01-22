import React from 'react';
import Tile from './Tile';
import SectionText from './SectionText';
import './Step.css';

function Step() {
  return (
    <section className='step'>
        <div className='container'>
            <SectionText text='Don’t let your day doing nothing'/>
            <div className='tile-wrapper'>
                <Tile tileImgSrc='sm-task.svg' tileText='Small task'/>
                <Tile tileImgSrc='write-it.svg' tileText='Write it'/>
                <Tile tileImgSrc='do-it.svg' tileText='Do it'/>
                <Tile tileImgSrc='repeat.svg' tileText='Repeat'/>
            </div>
        </div>      
    </section>
  )
}

export default Step
