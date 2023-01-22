import React from 'react'
import './Tile.css'

function Tile(props) {
  return (
    <div className='tile'>
        <img src={props.tileImgSrc} className='tile-img'></img>
        <p className='tile-text'>{props.tileText}</p>
    </div>
  )
}

export default Tile
