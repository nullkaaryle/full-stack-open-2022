import { useState } from 'react'

// component for rendering text and values
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

// component for calculating and rendering statistics with the help of Display component
const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  const total = good + neutral + bad
  const average = (((good * 1) + (neutral * 0) + (bad * (-1))) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1)

  return (
    <>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={total} />
      <Display text="average" value={average} />
      <Display text="positive" value={positive} text2="%" />
    </>
  )
}

// the root component
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
