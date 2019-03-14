//import * as React from 'react'
import React, {useState} from 'react'

type Props = {
  initCount: number
}

export default function Hello(props: Props): JSX.Element {
  const [count, setCount] = useState(props.initCount)
  return <div>
    <div>Count: {count}</div>
    <button onClick={_ => setCount(count + 1)}>Increase</button>
  </div>
};
