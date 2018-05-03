import React from 'react'

export default ({text, style}) => (
  <div className="box" style={style}>
    {text||'Box'}
  </div>
)
