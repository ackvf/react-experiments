See [Live examples](http://react-experiments.herokuapp.com/)<br>

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).<br>
You can read how to perform common tasks in this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

Install with `npm install`, run with `npm start`. It will run on http://localhost:3000/.

## React Experiments

- [Context API - Provider & Consumer Wrappers](#context-api---provider--consumer-wrappers)

## Context API - Provider & Consumer Wrappers

Uses simplified `Provider` and `Consumer` wrappers that accept contexts as argument.


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
