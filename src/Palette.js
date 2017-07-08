import React from 'react'
import MoriComponent from './MoriComponent'

class Palette extends MoriComponent {
  render () {
    const brushColors = [
      'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'gray', 'magenta', 'turquoise'
    ]
    let colorButtons = brushColors.map(function (color, index) {
      let className = 'color-button ' + color
      return (
        <div key={index} className={className} />
      )
    })
    return (
      <div className='palette'>
        {colorButtons}
      </div>
    )
  }
}

export default Palette
