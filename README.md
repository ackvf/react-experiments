See [Live examples](http://react-experiments.herokuapp.com/) _(built with development env)_<br>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br>
You can read how to perform common tasks in this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Install with `npm install`, run with `npm start`. It will run on http://localhost:3000/.

## React Experiments

- [Context API - Provider & Consumer Wrappers](#context-api---provider--consumer-wrappers) ([demo](http://react-experiments.herokuapp.com/context-api))
- [setState flow & direct state mutation](#setstate-flow--direct-state-mutation) ([demo](http://react-experiments.herokuapp.com/state-flow))

## Context API - Provider & Consumer Wrappers

Uses simplified `Provider` and `Consumer` wrappers that accept contexts as arguments. ([demo](http://react-experiments.herokuapp.com/context-api))


```jsx
<Provide
  theme={[ThemeContext, this.state.theme]}
  color={[ColorContext, this.state.color]}
>
  <SomeIntermediate text="Super!"/>
</Provide>

// ... later in SomeIntermediate.jsx

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
```

It is implemented using `Array.reduce` and under the hood it wraps your FaaC (Function as a Child) with all provided contexts. See code [here](https://github.com/ackvf/react-experiments/blob/master/src/experiments/ContextAPI/SuperContext.jsx).


## setState flow & direct state mutation

This [demo](http://react-experiments.herokuapp.com/state-flow) demonstrates the direct state manipulation and its effects on the component itself and its (nested) children.

See this [SO answer](https://stackoverflow.com/a/50149659/985454) for details.

```jsx
this.setState(state => {
  state.nested.flag = false
  state.another.deep.prop = true
  return state
})

this.setState(state => (state.nested.flag = false, state))
```
