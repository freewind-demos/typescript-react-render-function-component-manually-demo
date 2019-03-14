import Hello from './hello'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

const HelloElement = Hello();

ReactDOM.render(
  HelloElement,
  document.body
)
