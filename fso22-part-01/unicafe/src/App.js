import { useState } from 'react'

// component for showing feedback statistics
const Display = (props) => (
  <div>
    {props.text} {props.value} {props.text2}
  </div>
)

// component for button functions
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad
  const average = (((good * 1) + (neutral * 0) + (bad * (-1))) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1)

  const setToGood = newValue => {
    setGood(newValue)
  }

  const setToNeutral = newValue => {
    setNeutral(newValue)
  }

  const setToBad = newValue => {
    setBad(newValue)
  }

  return (
    <div>
      <h1> UNICAFE </h1>
      <h3> Give feedback: </h3>
      
      <Button handleClick={() => 
        setToGood(good + 1)} text="good" />
      
      <Button handleClick={() => 
        setToNeutral(neutral + 1)} text="neutral" />
      
      <Button handleClick={() => 
        setToBad(bad + 1)} text="bad" />
     
      <h3> Statistics: </h3>
      
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={total} />
      <Display text="average" value={average}/>
      <Display text="positive" value={positive} text2="%" />

    </div>
  )
}

export default App
