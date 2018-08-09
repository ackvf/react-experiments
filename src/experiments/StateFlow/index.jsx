import React from 'react'

import StateFlow from './StateFlow'
import NestedStateFlow from './NestedStateFlow'


export default class App extends React.Component {
  render() {
    return (
      <main className="stateFlow">
        <h1>React State Flow</h1>

        <p>Open console for this experiment</p>

        <StateFlow/>
        <NestedStateFlow/>

        <p>
          tip: inspect <code>window.stateStack</code> and <code>window.stateStackNested</code>
        </p>

      </main>
    )
  }
}
