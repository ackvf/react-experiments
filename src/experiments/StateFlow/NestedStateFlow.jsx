import React from 'react'

import StatePrinter from './StatePrinter'
import StackPrinter from './StackPrinter'


let firstState
let stateStack = []
window['stateStackNested'] = stateStack

const r = obj => `#${stateStack.indexOf(obj)}`


export default class NestedStateFlow extends React.Component {
  state = {
    deeply: {
      nested: {
        c: 0,
      },
    },
  }

  updateState = () => this.setState(state => {
    console.debug('---------------------------')
    state.deeply.nested.c++
    console.debug('update', 'state', r(state))
    return state
  }, () => {
    console.debug('updated', 'this.state', r(this.state))
    if (updateNestedChild) updateNestedChild()
  })

  constructor(props) {
    super(props)

    firstState = this.state
    stateStack.push(firstState)
    console.debug('firstState', r(firstState))

    window['updateStateNested'] = this.updateState
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

  nestedValueGetter = state => state.deeply.nested.c

  render() {
    console.debug('render', 'this.state', r(this.state))
    return (
      <article>
        <button onClick={this.updateState}>updateState</button>
        <br/>
        <StatePrinter state={this.state}/>

        <Intermediate deeply={this.state.deeply}/>
        <IntermediateClass deeply={this.state.deeply}/>
        <PureIntermediateClass deeply={this.state.deeply}/>
        <PureIntermediateClass2 deeply={this.state.deeply}/>

        <StackPrinter stack={stateStack} getValue={this.nestedValueGetter} />
      </article>
    )
  }
}

/* --------------------------------------------- */

/*
 * Both Intermediate and Child rerender EVERY TIME Parent renders
 */

const Intermediate = props => {
  console.debug('%cIntermediate rendered', 'color: white; background-color: green')
  return <Child nested={props.deeply.nested}/>
}

const Child = props => {
  console.debug('%cChild rendered', 'color: white; background-color: green')
  return <div>Nested Child: {JSON.stringify(props.nested)}</div>
}

/* --------------------------------------------- */

/*
 * Both IntermediateClass and ChildClass rerender EVERY TIME Parent renders
 */
class IntermediateClass extends React.Component {
  render() {
    console.debug('%cIntermediateClass rendered', 'color: white; background-color: olive')
    return <ChildClass nested={this.props.deeply.nested}/>
  }
}

class ChildClass extends React.Component {
  render() {
    console.debug('%cChildClass rendered', 'color: white; background-color: olive')
    return <div>Nested ChildClass: {JSON.stringify(this.props.nested)}</div>
  }
}

/* --------------------------------------------- */

/*
 * Nothing renders here!
 * PureComponents shallowly compare the props, but `nested` doesn't change.
 */
class PureIntermediateClass extends React.PureComponent {
  render() {
    console.debug('%cPureIntermediateClass rendered', 'color: white; background-color: teal')
    return <PureChildClass nested={this.props.deeply.nested}/>
  }
}

class PureChildClass extends React.PureComponent {
  render() {
    console.debug('%cPureChildClass rendered', 'color: white; background-color: teal')
    return <div>Nested PureChildClass: {JSON.stringify(this.props.nested)}</div>
  }
}

/* --------------------------------------------- */

/*
 * Nothing renders here!
 * EXCEPT: We store a `forceUpdate` handler that we explicitly call in the parent@updateState(),
 * so even though the PureIntermediateClass2 doesn't render similarly to PureIntermediateClass,
 * the PureChildClassWithHack is rerendered when needed.
 */
class PureIntermediateClass2 extends React.PureComponent {
  render() {
    console.debug('%cPureIntermediateClass rendered', 'color: white; background-color: black')
    return <PureChildClassWithHack nested={this.props.deeply.nested}/>
  }
}

let updateNestedChild

class PureChildClassWithHack extends React.PureComponent {
  constructor(props) {
    super(props)
    updateNestedChild = this.forceUpdate.bind(this)
  }

  render() {
    console.debug('%cPureChildClass rendered', 'color: white; background-color: black')
    return <div>Nested PureChildClassWithHack: {JSON.stringify(this.props.nested)}</div>
  }
}
