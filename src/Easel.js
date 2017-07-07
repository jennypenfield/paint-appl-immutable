import React from 'react'
import Canvas from './Canvas'
import MoriComponent from './MoriComponent'
import Palette from './Palette'

class Easel extends MoriComponent {
  render () {
    return (
      <div className='easel-container'>
        <Canvas />
        <Palette />
      </div>
    )
  }
}

export default Easel
