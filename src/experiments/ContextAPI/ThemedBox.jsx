import React from 'react'
import ThemeContext from './ThemeContext'
import ColorContext from './ColorContext'
import Box from './Box'

export default function ThemedBox(props) { return (
  <c-c>
    <ThemeContext.Consumer>
      {theme => (
        <c-c>
          <ColorContext.Consumer>
            {color => (
              <Box
                {...props}
                style={{
                  backgroundColor: theme.background,
                  color: color.color,
                }}
              />
            )}
          </ColorContext.Consumer>
        </c-c>
      )}
    </ThemeContext.Consumer>
  </c-c>
)}
