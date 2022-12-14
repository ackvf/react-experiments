import React from 'react'

import ThemeContext, {themes} from './ThemeContext'
import ColorContext, {colors} from './ColorContext'
import { Provide } from './SuperContext'
import ThemedBox from './ThemedBox'
import SuperBox from './SuperBox'

import './style.css'


// An intermediate component that uses the ThemedBox
// const Intermediate = props => <ThemedBox {...props}/>
// const AnotherIntermediate = props => <SuperBox {...props}/>

class Intermediate extends React.PureComponent {
  render = () => <ThemedBox {...this.props} />
}

class AnotherIntermediate extends React.PureComponent {
  render = () => <SuperBox {...this.props} />
}



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
          <article>
            <ThemedBox text="Default" />
          </article>
          <c-p>
            <ThemeContext.Provider value={this.state.theme}>
              <article>
                <Intermediate text="Theme" />
              </article>
            </ThemeContext.Provider>
          </c-p>
          <c-p>
            <ColorContext.Provider value={this.state.color}>
              <article>
                <Intermediate text="Color" />
              </article>
            </ColorContext.Provider>
          </c-p>
        </section>

        <section className='double'>
          <c-p>
            <ThemeContext.Provider value={this.state.theme}>
              <c-p>
                <ColorContext.Provider value={this.state.color}>
                  <article>
                    <Intermediate text="Both"/>
                    <AnotherIntermediate text="Super!"/>
                  </article>
                </ColorContext.Provider>
              </c-p>
            </ThemeContext.Provider>
          </c-p>

          <c-p>
            <Provide
              theme={[ThemeContext, this.state.theme]}
              color={[ColorContext, this.state.color]}
            >
              <article>
                <Intermediate text="Both"/>
                <AnotherIntermediate text="Super!"/>
              </article>
            </Provide>
          </c-p>
        </section>

        <div className="legend">
          <ul>
            <li><span className="provider">This is a provider layer</span></li>
            <li><span className="consumer">This is a consumer layer</span></li>
          </ul>
        </div>

      </main>
    )
  }
}
