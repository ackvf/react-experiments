import React from "react"

export const Provide = ({children, ...providers}) => {
  const pKeys = Object.keys(providers)
  return pKeys.reduceRight((nested, key) => {
    const [{Provider}, value] = providers[key]
    return <Provider value={value}>{nested}</Provider>
  }, children)
}

export const Consume = ({children, ...consumers}) => {
  const cKeys = Object.keys(consumers)
  let prevKey, values = {} // collect values from consumers
  return cKeys.reduceRight((nested, key) => {
    const {Consumer} = consumers[key]
    return prevValue => {
      if (prevKey) values = {...values, [prevKey]: prevValue}
      prevKey = key
      return <Consumer>{nested}</Consumer>
    }
  }, prevValue => children({...values, [prevKey]:prevValue}))
  () // after every consumer is wrapped, unwrap (call) one dummy level
}

export default Consume

/*
 * Why are the Consumer and Provider properties of Consumer?
 * https://github.com/facebook/react/issues/12733
 *
 * Accessing context value using Consumer._currentValue
 * https://github.com/reactjs/rfcs/pull/47#issuecomment-386038438
 */
