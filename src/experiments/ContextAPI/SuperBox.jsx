import React from 'react'
import themeContext from './themeContext'
import colorContext from './colorContext'
import Box from './Box'
import { Consume } from './superContext'

export default function SuperBox(props) {
  return (
    <c-c>
      <Consume
        theme={themeContext}
        color={colorContext}
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
}
