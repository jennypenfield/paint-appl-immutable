import MoriComponent from './MoriComponent'
import mori from 'mori'
import React from 'react'

class Pixels extends MoriComponent {
  render () {
    // const color = mori.get(this.props.imdata, 'color')
    const rowIdx = mori.get(this.props.imdata, 'rowIdx')
    const colIdx = mori.get(this.props.imdata, 'colIdx')
    let className = 'pixels'

    const clickFn = mori.partial(clickPixel, rowIdx, colIdx)

    const pixelStyle = {
      backgroundColor: '#fff'
    }

    return (
      <div className={className} onClick={clickFn} style={pixelStyle} />
    )
  }
}

function booleanNot (x) {
  return !x
}

function clickPixel (rowIdx, colIdx) {
  const currentState = window.CURRENT_STATE
  const newState = mori.updateIn(currentState, ['canvas', rowIdx, colIdx], booleanNot)
  window.NEXT_STATE = newState
}

export default Pixels
