import MoriComponent from './MoriComponent'
import mori from 'mori'
import React from 'react'

class Pixels extends MoriComponent {
  render () {
    const color = mori.get(this.props.imdata, 'color')
    const rowIdx = mori.get(this.props.imdata, 'rowIdx')
    const colIdx = mori.get(this.props.imdata, 'colIdx')
    let className = 'pixels'

    const pixelStyle = {
      backgroundColor: color
    }

    return (
      <div className={className} data-row-idx={rowIdx} data-col-idx={colIdx} style={pixelStyle} />
    )
  }
}

export default Pixels
