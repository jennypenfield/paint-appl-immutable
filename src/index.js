import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import mori from 'mori'
import './index.css'

// -----------------------------------------------------------------------------
// Application State
// -----------------------------------------------------------------------------

const NUM_ROWS = 60
const NUM_COLS = 75

function createEmptyCanvas () {
  var canvas = []
  for (let i = 0; i < NUM_ROWS; i++) {
    canvas[i] = []

    for (let j = 0; j < NUM_COLS; j++) {
      canvas[i][j] = false
    }
  }

  return canvas
}

window.EMPTY_CANVAS = mori.toClj(createEmptyCanvas())
window.COLORS = mori.vector('red', 'orange', 'yellow', 'green', 'blue', 'purple',
'black', 'gray', 'hotpink', 'turquoise')

const initialState = mori.hashMap('canvas', window.EMPTY_CANVAS,
                                  'colors', window.COLORS,
                                  'currentColor', mori.first(window.COLORS))

// CURRENT_STATE is always the current state of the application
window.CURRENT_STATE = null

// NEXT_STATE is the next state the application should be in
// Start it off with a PDS version of our initialState object.
window.NEXT_STATE = initialState
window.IS_PRESSED_DOWN = false

let renderCount = 0

// You can track each application state using a mori vector.
// window.HISTORY = mori.vec()

// -----------------------------------------------------------------------------
// Render Loop
// -----------------------------------------------------------------------------

const rootEl = document.getElementById('root')

// constantly render on every requestAnimationFrame
function render () {
  // Only trigger a render if CURRENT_STATE and NEXT_STATE are different.
  // NOTE: checking deep equality of a persistent data structure is a fast and
  //       cheap operation, even for large data structures
  if (!mori.equals(window.CURRENT_STATE, window.NEXT_STATE)) {
    // do not perform the update if NEXT_STATE is not valid
    if (!isValidState(window.NEXT_STATE)) {
      console.warn('Oops! Tried to set an invalid NEXT_STATE')
      window.NEXT_STATE = window.CURRENT_STATE
    } else {
      // next state is now our current state
      window.CURRENT_STATE = window.NEXT_STATE

      // you might add this new state to your history vector here...
      // window.HISTORY = mori.conj(window.HISTORY, window.CURRENT_STATE)

      ReactDOM.render(<App imdata={window.CURRENT_STATE} />, rootEl)
      // ReactDOM.render(App({imdata: window.CURRENT_STATE}), rootEl)
      // ReactDOM.render(<App />, rootEl)

      renderCount = renderCount + 1
      // console.log('Render #' + renderCount)
    }
  }

  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)

// ensure valid state
function isValidState (state) {
  return mori.isMap(state) &&
         mori.isVector(mori.get(state, 'canvas'))
}

// DOM events
// NOTE: these do not participate in React's synthetic event system

function globalMouseDown () {
  window.IS_PRESSED_DOWN = true
}
function globalMouseUp () {
  window.IS_PRESSED_DOWN = false
}

document.body.addEventListener('mousedown', globalMouseDown)
document.body.addEventListener('mouseup', globalMouseUp)
