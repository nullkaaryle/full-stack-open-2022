import { useState } from 'react'

// component for button functions
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// component for rendering one statistic line
const StatisticLine = (props) => (
  <tr>
    <td> {props.text} </td>
    <td> {props.value} {props.text2} </td>
  </tr>
)


// component for calculating and rendering statistics with the help of StatisticLine component
const Statistics = (props) => {
  const { good, neutral, bad } = props
  const total = good + neutral + bad

  if (total === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  }

  const average = (((good * 1) + (neutral * 0) + (bad * (-1))) / total).toFixed(1)
  const positive = ((good / total) * 100).toFixed(1)

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} text2="%" />
        </tbody>
      </table>
    </div>
  )
}

// the root component
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => setGood(good + 1)
  const setToNeutral = () => setNeutral(neutral + 1)
  const setToBad = () => setBad(bad + 1)

  return (
    <div>
      <h1> UNICAFE </h1>
      <h3> Give feedback: </h3>
      <Button handleClick={setToGood} text="GOOD" />
      <Button handleClick={setToNeutral} text="NEUTRAL" />
      <Button handleClick={setToBad} text="BAD" />
      <h3> Statistics: </h3>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
