import MoriComponent from './MoriComponent'
import mori from 'mori'
import React from 'react'

class Pixels extends MoriComponent {
  render () {
    const color = mori.get(this.props.imdata, 'currentColor')
    const rowIdx = mori.get(this.props.imdata, 'rowIdx')
    const colIdx = mori.get(this.props.imdata, 'colIdx')
    let className = 'pixels'

    const clickFn = mori.partial(mouseEnterPixel, rowIdx, colIdx)

    function mouseEnter () {
      mouseEnterPixel(rowIdx, colIdx)
    }

    const pixelStyle = {
      backgroundColor: color
    }

    return (
      <div className={className} onClick={clickFn} onMouseEnter={mouseEnter} style={pixelStyle} />
    )
  }
}

function mouseEnterPixel (rowIdx, colIdx) {
  const currentState = window.CURRENT_STATE
  const currentColor = mori.get(currentState, 'currentColor')
  const newState = mori.assocIn(currentState, ['canvas', rowIdx, colIdx], currentColor)
  window.NEXT_STATE = newState
}

export default Pixels
