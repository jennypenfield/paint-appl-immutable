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
    console.log(rowVec)
    let rowData = mori.hashMap('rows', rowVec, 'rowIdx', rowIdx)
    let key = 'row-' + rowIdx

    rows.push(<Rows imdata={rowData} key={key} />)
  }

  const colorsVec = mori.get(props.imdata, 'colors')

  function mouseDown () {
    window.IS_PRESSED_DOWN = true
  }
  function mouseUp () {
    window.IS_PRESSED_DOWN = false
  }

  return (
    <div className='app-container'>
      <h1 className='title-red'>P</h1><h1 className='title-orange'>A</h1>
      <h1 className='title-green'>I</h1>
      <h1 className='title-black'>N</h1><h1 className='title-blue'>T</h1>
      <button className='reset-button' onClick={clickReset}>reset</button>
      <button className='undo-button' onClick={clickUndo}>undo</button>
      <div className='easel-container'>
        <div className='canvas' onMouseDown={mouseDown} onMouseUp={mouseUp}>
          {rows}
        </div>
        <Palette imdata={colorsVec} />
      </div>
    </div>
  )
}

function clickReset () {
  window.NEXT_STATE = mori.hashMap('canvas', window.EMPTY_BOARD, 'colors', window.COLORS,
  'currentColor', 'black')
}

function clickUndo () {

}

export default App
