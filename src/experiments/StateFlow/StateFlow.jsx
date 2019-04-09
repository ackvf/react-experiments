import React from 'react'

import StatePrinter from './StatePrinter'
import StackPrinter from './StackPrinter'


let firstState
let stateStack = []
window['stateStack'] = stateStack

const r = obj => `#${stateStack.indexOf(obj)}`


export default class StateFlow extends React.Component {
  state = {
    c: 0,
  }

  updateState = () => this.setState(state => {
    console.debug('---------------------------')
    state.c++
    console.debug('update', 'state', r(state))
    return state
  }, () => {
    console.debug('updated', 'this.state', r(this.state))
  })

  constructor(props) {
    super(props)

    firstState = this.state
    stateStack.push(firstState)
    console.debug('firstState', r(firstState))

    window['updateState'] = this.updateState
  }

  static getDerivedStateFromProps(props, state) {
    if (stateStack.includes(state)) {
      console.debug('gDSFP', 'state', r(state))
    } else {
      console.debug('gDSFP', 'state', `#${stateStack.push(state) - 1} pushed`)
    }

    return null
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.debug('sCU', 'this.state', r(this.state), 'nextState', r(nextState))
    return true
  }

  valueGetter = state => state.c

  render() {
    console.debug('render', 'this.state', r(this.state))
    return (
      <article>
        <button onClick={this.updateState}>updateState</button>
        <br/>
        <StatePrinter state={this.state}/>
        <StackPrinter stack={stateStack} getValue={this.valueGetter}/>
      </article>
    )
  }
}
