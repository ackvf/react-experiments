import React from 'react'

export default class StackPrinter extends React.Component {
  render() {
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
                this.props.stack.map((item, ix) => (
                  <td key={ix} style={{border: '1px solid lightgray'}}>
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
