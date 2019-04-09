import React from 'react'

import StateFlow from './StateFlow'
import NestedStateFlow from './NestedStateFlow'
import ForcedStateFlow from './ForcedStateFlow'


export default class App extends React.Component {
  render() {
    return (
      <main className="stateFlow">
        <h1>React State Flow</h1>

        <p>Open console for this experiment</p>

        <p style={{fontSize: '75%'}}>
          tip: inspect <code>window.stateStack</code> and <code>window.stateStackNested</code><br/>
          you can also call <code>window.updateState()</code>, <code>window.updateStateNested()</code>, <code>window.updateStateForced()</code>
        </p>

        <StateFlow/>
        <br/>
        <NestedStateFlow/>
        <br/>
        <ForcedStateFlow/>

      </main>
    )
  }
}
