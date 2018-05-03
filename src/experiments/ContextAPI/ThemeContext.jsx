import React from 'react'

export const themes = {
  light: {
    background: '#00A0E9',
  },
  dark: {
    background: '#036a9a',
  },
  default: {
    background: '#f5f5f5',
  },
}

export default React.createContext(
  themes.default // default value
)
