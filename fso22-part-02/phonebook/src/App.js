import { useState } from 'react'
import Person from './components/Person'


//the root component, uses imported Person component
const App = () => {

  // list of Person objects are saved in state
  const [persons, setPersons] = useState([])

  // text that the user types in name input field
  // is saved in state newName
  const [newName, setNewName] = useState('')

  // takes care of adding a new person to persons list
  // the last line empties the input element in form,
  // if left out, the newName state would not change and
  // the added name would stay on the input field
  // after submitting (and user would have to erase it)
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      id: newName
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  // follows the input field and
  // what the user is typing,
  // updates the newName state accordingly
  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>

      <h1> Phonebook </h1>

      <form onSubmit={addPerson}>
        NAME:{' '}
        <input
          value={newName}
          onChange={handlePersonChange}
        />
        <button type="submit">
          ADD PERSON
        </button>
      </form>

      <h2> Numbers </h2>

      <ul>
        {persons.map(person =>
          <Person
            key={person.id}
            person={person}
          />)}
      </ul>

    </div>

  )

}

export default App