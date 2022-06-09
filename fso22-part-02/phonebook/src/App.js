import { useState } from 'react'
import Person from './components/Person'


//the root component, uses imported Person component
const App = () => {

  // list of Person objects are saved in state
  const [persons, setPersons] = useState([])


  // text that the user types in name input field
  // is saved in state newName
  const [newName, setNewName] = useState('')


  // takes care of checking if there already
  // is a person with same name
  // and if not, then adding the person
  const addPerson = (event) => {
    event.preventDefault()
    if (match) {
      alertUser()
    } else {
      savePerson()
    }
  }


  // check if the person with the same id 
  // is already added to phonebook
  // the id of the person uses lower case version of name
  // so the match checking is done on lower case newName
  const match = persons.find((person) => person.id === newName.toLowerCase())


  // alert user with a pop up in browser
  // that the person is already added to phonebook
  const alertUser = () => {
    window.alert(`${newName} is already added to phonebook`)
  }


  // creates a new Person and adds it to the persons list
  // the id is also the name, but always in lower case
  // this prevents adding "Jane doe" to phonebook
  // if "Jane Doe" (or any other lower case/upper case combination) 
  // is already added
  // the second last line empties the input element in form,
  // if left out, the newName state would not change and
  // the added name would stay on the input field
  // after submitting (and user would have to erase it)
  const savePerson = () => {
    const personObject = {
      name: newName,
      id: newName.toLowerCase()
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