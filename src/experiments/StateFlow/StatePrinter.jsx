import React from 'react'

export default class StatePrinter extends React.Component {
  render() {
    return (
      <div style={{
        display: 'inline-block',
        textAlign: 'left',
      }}>
        <pre>
          state = {JSON.stringify(this.props.state, null, '  ')}
        </pre>
      </div>
    )
  }
}
