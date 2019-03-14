import Hello from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'


ReactDOM.render(
  React.createElement(Hello, {initCount: 100}),
  document.body
)
