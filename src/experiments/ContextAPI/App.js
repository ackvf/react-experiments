import React from 'react'

import themeContext, {themes} from './themeContext'
import colorContext, {colors} from './colorContext'
import ThemedBox from './ThemedBox'
import SuperBox from './SuperBox'

import './style.css'
import { Provide } from './superContext'

// An intermediate component that uses the ThemedBox
const Intermediate = props => <ThemedBox {...props}/>
const AnotherIntermediate = props => <SuperBox {...props}/>

export default class App extends React.Component {
  state = {
    theme: themes.light,
    color: colors.light,
  }

  toggleBoth = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
      color:
        state.color === colors.dark
          ? colors.light
          : colors.dark,
    }))
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }))
  }

  toggleColor = () => {
    this.setState(state => ({
      color:
        state.color === colors.dark
          ? colors.light
          : colors.dark,
    }))
  }

  render() {
    return (
      <main className="contextAPI">
        <h1>React 16.3. Context API</h1>

        <button onClick={this.toggleBoth}>Change Both</button>
        <button onClick={this.toggleTheme}>Change Theme</button>
        <button onClick={this.toggleColor}>Change Color</button>

        <section>
          <ThemedBox text="Default"/>

          <themeContext.Provider value={this.state.theme}>
            <Intermediate text="Theme"/>
          </themeContext.Provider>

          <colorContext.Provider value={this.state.color}>
            <Intermediate text="Color"/>
          </colorContext.Provider>
        </section>

        <section>
          <themeContext.Provider value={this.state.theme}>
            <colorContext.Provider value={this.state.color}>
              <Intermediate text="Both"/>
              <AnotherIntermediate text="Super!"/>
            </colorContext.Provider>
          </themeContext.Provider>

          <Provide
            theme={[themeContext, this.state.theme]}
            color={[colorContext, this.state.color]}
          >
            <Intermediate text="Both"/>
            <AnotherIntermediate text="Super!"/>
          </Provide>
        </section>

      </main>
    )
  }
}
