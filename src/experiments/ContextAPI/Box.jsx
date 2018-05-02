import React from 'react'

const Box = ({text, style}) => (
  <div className="box" style={style}>
    {text||'Box'}
  </div>
)

export default Box

