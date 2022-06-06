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

  // the 'selected' has a state
  // and it represents the index of the quote in the anecdotes list
  // in the start the first quote selected is in index 0
  const [selected, setSelected] = useState(0)

  // calculates a random integer (between 0 and the number of anecdotes in the list)
  // and then sets the integer as a new state for selected
  const chooseNextQuote = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  // the votes given for quotes has a state that is a list
  // the list is created with zeros and the length is the same as anecdotes list
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  // does not modify the original list votes
  // instead uses copied list to update the state of votes list
  // adds one vote for the selected quote
  const addVoteForQuote = (selected) => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // helper function for voting, triggered by clicking the 'vote' button
  //
  // Instead of creating this extra function and giving this to the button's event handler,
  // you could just use the 'anonymous function' style that also gets executed just when the button is clicked, 
  // like this : <Button handleClick={() => voteQuote(selected)} text="vote" />
  //
  // Do not accidentally give a function call, because when the component is first rendered
  // then the called function would be also executed right awat (without button click)
  // and executing the function addPointsForQuote... would cause rendering again,
  // and the rendering would cause executing the function, again,  which would cause rerendering ad infinitum
  // Example of a function call in this case: <Button handleClick={addPointsForQuote(selected)} text "vote" />
  const voteQuote = () => {
    addVoteForQuote(selected)
  }

  // finds the number of votes that is biggest in the list 'votes'
  const biggestVote = Math.max(...votes)

  // finds the index of biggest vote in the list 'votes'
  // if several quotes have the same biggest number of votes
  // then the smallest index is returned 
  // when using indexOf (the first occurrence)
  const findIndex = votes.indexOf(biggestVote)


  return (
    <div>
      <h3> QUOTE OF THE DAY </h3>
      <p> {anecdotes[selected]} </p>
      <p> Votes for this quote: {votes[selected]}</p>
      <Button handleClick={voteQuote} text="vote" />
      <Button handleClick={chooseNextQuote} text="next quote" />
      <h3> QUOTE WITH MOST VOTES ({biggestVote} votes)</h3>
      <p> {anecdotes[findIndex]} </p>

    </div>
  )
}

export default App
