import { useState } from 'react'

// component for button functions
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

// the root component
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'You cannot teach beginners top-down programming, because they dont know which end is up.'
  ]

  const max = anecdotes.length
  const [selected, setSelected] = useState(0)

  //sets a random integer (between 0 and max) to selected
  const setToSelected = () => setSelected(Math.floor(Math.random() * max))

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <Button handleClick={setToSelected} text="next anecdote" />
    </div>
  )
}

export default App
