import React from 'react'
import ThemeContext from './ThemeContext'
import ColorContext from './ColorContext'
import Box from './Box'

export default props => (
  <c-c>
    <ThemeContext>
      {theme => (
        <c-c>
          <ColorContext>
            {color => (
              <Box
                {...props}
                style={{
                  backgroundColor: theme.background,
                  color: color.color,
                }}
              />
            )}
          </ColorContext>
        </c-c>
      )}
    </ThemeContext>
  </c-c>
)
