import React from 'react'
import mori from 'mori'
import Easel from './Easel'
import Rows from './Rows'

function App (props) {
  const board = mori.get(props.imdata, 'board')
  const numRows = mori.count(board)

  let rows = []
  for (let rowIdx = 0; rowIdx < numRows; rowIdx++) {
    let rowVec = mori.get(board, rowIdx)
    let rowData = mori.hashMap('rows', rowVec, 'rowIdx', rowIdx)
    let key = 'row-' + rowIdx

    rows.push(<Rows imdata={rowData} key={key} />)
  }

  return (
    <div className='app-container'>
      HELLO
      <h1>Paint</h1>
      < Easel />
    </div>
  )
}

export default App
