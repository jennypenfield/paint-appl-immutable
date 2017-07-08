import React from 'react'
import mori from 'mori'
import Palette from './Palette'
import Rows from './Rows'

function App (props) {
  const canvas = mori.get(props.imdata, 'canvas')
  const numRows = mori.count(canvas)

  let rows = []
  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    let rowVec = mori.get(canvas, rowIdx)
    let rowData = mori.hashMap('rows', rowVec, 'rowIdx', rowIdx)
    let key = 'row-' + rowIdx

    rows.push(<Rows imdata={rowData} key={key} />)
  }

  return (
    <div className='app-container'>
      <h1 className='title-red'>P</h1><h1 className='title-orange'>A</h1>
      <h1 className='title-green'>I</h1>
      <h1 className='title-black'>N</h1><h1 className='title-blue'>T</h1>
      <div className='easel-container'>
        <div className='canvas'>
          {rows}
        </div>
        <Palette />
      </div>
    </div>
  )
}

export default App
