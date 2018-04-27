import React from "react"

export const Provide = ({children, ...providers}) => {
  const pKeys = Object.keys(providers)
  return pKeys.reduceRight((nested, key) => {
    const [{Provider}, value] = providers[key]
    return <Provider value={value}>{nested}</Provider>
  },
  children)
}

export const Consume = ({children, ...consumers}) => {
  const pKeys = Object.keys(consumers)
  let lastKey, values = {} // collect values from consumers
  return pKeys.reduceRight((nested, key) => {
    const {Consumer} = consumers[key]
    return prop => {
      if (lastKey) values = {...values, [lastKey]: prop}
      lastKey = key
      return <Consumer>{nested}</Consumer>
    }
  }, prop => children({...values, [lastKey]:prop}))
  () // after every consumer is wrapped, unwrap (call) one dummy level
}
