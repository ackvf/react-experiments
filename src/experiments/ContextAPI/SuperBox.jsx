import React from 'react'
import ThemeContext from './ThemeContext'
import ColorContext from './ColorContext'
import Consume from './SuperContext'
import Box from './Box'

export default props => (
  <c-c>
    <Consume
      theme={ThemeContext}
      color={ColorContext}
    >
      {({color, theme}) => (
        <Box
          {...props}
          style={{
            backgroundColor: theme.background,
            color: color.color,
          }}
        />
      )}
    </Consume>
  </c-c>
)
