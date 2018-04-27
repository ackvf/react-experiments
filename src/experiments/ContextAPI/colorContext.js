import React from 'react'

export const colors = {
  light: {
    color: 'blue',
  },
  dark: {
    color: 'lightblue',
  },
  default: {
    color: 'black',
  },
}

export default React.createContext(
  colors.default // default value
)
