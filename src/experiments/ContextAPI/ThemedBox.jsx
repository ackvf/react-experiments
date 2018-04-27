import React from 'react'
import themeContext from './themeContext'
import colorContext from './colorContext'
import Box from './Box'

export default function ThemedBox(props) {
  return (
    <c-c>
      <themeContext.Consumer>
        {theme => (
          <c-c>
            <colorContext.Consumer>
              {color => (
                <Box
                  {...props}
                  style={{
                    backgroundColor: theme.background,
                    color: color.color,
                  }}
                />
              )}
            </colorContext.Consumer>
          </c-c>
        )}
      </themeContext.Consumer>
    </c-c>
  )
}
