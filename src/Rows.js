import React from 'react'
import mori from 'mori'
import MoriComponent from './MoriComponent'
import Pixels from './Pixels'

class Rows extends MoriComponent {
  render () {
    const rowVec = mori.get(this.props.imdata, 'rows')
    const numCols = mori.count(rowVec)
    const rowIdx = mori.get(this.props.imdata, 'rowIdx')

    let pixels = []
    for (let colIdx = 0; colIdx < numCols; colIdx++) {
      let color = mori.get(rowVec, colIdx)
      let pixelData = mori.hashMap('rowIdx', rowIdx, 'colIdx', colIdx, 'color', color)
      let key = 'pixel-' + rowIdx + '-' + colIdx

      pixels.push(<Pixels imdata={pixelData} key={key} />)
    }

    return (
      <div className='row'>{pixels}</div>
    )
  }
}

export default Rows
