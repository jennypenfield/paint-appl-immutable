import React from 'react'
import MoriComponent from './MoriComponent'

class Palette extends MoriComponent {
  render () {
    const brushColors = [
      'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'black', 'gray', 'magenta', 'turquoise'
    ]
    return ( <div>PALETTE</div>)
    // brushColors.map(function (colors, index) {
    //   return (
    //     <div className={colors} key={index} />
    //   )
    // })
  }
}

export default Palette
