import React from 'react'
import mori from 'mori'
import MoriComponent from './MoriComponent'
import Palette from './Palette'
import Rows from './Rows'

class App extends MoriComponent {
  render () {
    const canvas = mori.get(this.props.imdata, 'canvas')
    const numRows = mori.count(canvas)

    let rows = []
    for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
      let rowVec = mori.get(canvas, rowIdx)
      let rowData = mori.hashMap('rows', rowVec, 'rowIdx', rowIdx)
      let key = 'row-' + rowIdx

      rows.push(<Rows imdata={rowData} key={key} />)
    }

    function onMouseOver (evt) {
      // do nothing if the mouse is not pressed down
      if (!window.IS_PRESSED_DOWN) return

      let targetEl = evt.nativeEvent.target
      let rowIdx = parseInt(targetEl.getAttribute('data-row-idx'), 10)
      let colIdx = parseInt(targetEl.getAttribute('data-col-idx'), 10)

      // exit if the event did not happen on a pixel element
      if (isNaN(rowIdx) || isNaN(colIdx)) return

      const currentState = window.CURRENT_STATE
      const currentColor = mori.get(currentState, 'currentColor')
      const newState = mori.assocIn(currentState, ['canvas', rowIdx, colIdx], currentColor)
      window.NEXT_STATE = newState
    }

    const colorsVec = mori.get(this.props.imdata, 'colors')

    return (
      <div className='app-container'>
        <h1 className='title-red'>P</h1><h1 className='title-orange'>A</h1>
        <h1 className='title-green'>I</h1>
        <h1 className='title-black'>N</h1><h1 className='title-blue'>T</h1>
        <button className='reset-button' onClick={clickReset}>reset</button>
        <button className='undo-button' onClick={clickUndo}>undo</button>
        <div className='easel-container'>
          <div className='canvas' onMouseOver={onMouseOver}>
            {rows}
          </div>
          <Palette imdata={colorsVec} />
        </div>
      </div>
    )
  }
}

function clickReset () {
  window.NEXT_STATE = mori.hashMap('canvas', window.EMPTY_CANVAS,
                                    'colors', window.COLORS,
                                    'currentColor', mori.first(window.COLORS))
}

function clickUndo () {

}

export default App
