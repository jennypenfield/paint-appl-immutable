import React from 'react'
import mori from 'mori'
import MoriComponent from './MoriComponent'

class Palette extends MoriComponent {
  render () {
    let colorsVec = this.props.imdata
    let colorsVecLength = mori.count(colorsVec)
    let colorButtons = []
    for (let i = 0; i < colorsVecLength; i++) {
      let color = mori.get(colorsVec, i)
      colorButtons.push(colorButton(color, i))
    }

    return (
      <div className='palette'>
        {colorButtons}
      </div>
    )
  }
}

function colorButton (color, i) {
  let className = 'color-button ' + color
  return (
    <div className={className} key={i} onClick={clickColor.bind(null, color)} />
  )
}

function clickColor (color) {
  const currentState = window.CURRENT_STATE
  const newState = mori.assoc(currentState, 'currentColor', color)
  window.NEXT_STATE = newState
  console.log(color)
}

export default Palette
