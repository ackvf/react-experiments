import React from 'react'
import { Link } from 'react-router-dom'

export default class Landing extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='context-api'>React 16.3. Context API</Link></li>
      </ul>
    )
  }
}
