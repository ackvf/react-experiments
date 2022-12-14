import React from 'react'

export default function Box({text, style}) { return (
  <div className="box" style={style}>
    {text||'Box'}
  </div>
)}
