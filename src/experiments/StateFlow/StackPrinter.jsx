import React from 'react'

import './StackPrinter.css'

export default class StackPrinter extends React.Component {
  previousValues = []
  currentValues = []

  maybeAnimate = ix => ref => {
    if (!ref) return
    if (this.currentValues[ix] !== this.previousValues[ix]) {
      this.previousValues[ix] === undefined
        ? (ref.classList.remove('transition'), ref.classList.add('blue'))
        : (ref.classList.remove('transition', 'blue'), ref.classList.add('red'))
      setTimeout(() => ref.classList.add('transition'))
      setTimeout(() => ref.classList.remove('red', 'blue'))
    }
  }

  componentDidUpdate = this.componentDidMount = () => this.previousValues = this.currentValues

  render() {
    const { stack, getValue } = this.props
    this.currentValues = stack.map(getValue)

    return (
      <div style={{
        maxWidth: 900,
        margin: 'auto',
        overflowX: 'scroll',
      }}>
        <table>
          <tbody>
            <tr style={{
              textAlign: 'left',
            }}>
              {
                stack.map((item, ix) => (
                  <td key={ix} className="default" ref={this.maybeAnimate(ix)}>
                    <pre>#{ix}<br/>
                      {JSON.stringify(item, null, '  ')}
                    </pre>
                  </td>
                ))
              }
              <td ref={el => el && el.scrollIntoView()}/>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
