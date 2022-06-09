import { useState } from 'react'
import { Form } from './components/Form'
import { AddFilter, ShowFiltered } from './components/Filter'


//the root component, uses imported Person component
const App = () => {

  // list of Person objects are saved in state
  // some seed data added for testing purposes
  const [persons, setPersons] = useState([
    { name: 'Ville', number: '05012345', id: 'ville' },
    { name: 'Kalle', number: '04034557', id: 'kalle' },
    { name: 'Anna', number: '05012324', id: 'anna' },
    { name: 'Hanna', number: '04535123', id: 'hanna' }
  ])

  // text that the user types in name input field
  // is saved in state newName
  const [newName, setNewName] = useState('')

  // text that the user types in number input field
  // is saved in state newNumber
  const [newNumber, setNewNumber] = useState('')

  // text that the user types in filter input field
  // is saved in state newFilter
  const [newFilter, setNewFilter] = useState('')

  // follows the input field and
  // what the user is typing,
  // updates the newName state accordingly
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // follows the input field and
  // what the user is typing,
  // updates the newNumber state accordingly
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  // follows the input field and
  // what the user is typing,
  // updates the newFilter state accordingly
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  // empties the input fields for name and number in the form
  // by setting new states '' for newName and newName
  // otherwise for example the added name would stay on the input field
  // after submitting form (and user would have to erase it)
  const reset = () => {
    setNewName('')
    setNewNumber('')
  }

  // takes care of checking if there already
  // is a person with same name or number
  // and if not, then saving the person
  const addPerson = (event) => {
    event.preventDefault()
    if (matchName || matchNumber) {
      alertUser()
    } else {
      savePerson()
    }
  }

  // check if the person with the same name or number
  // is already added to phonebook
  // the id of the person uses lower case version of name
  // so the match checking is done on lower case newName
  const matchName = persons.find((person) => person.id === newName.toLowerCase())
  const matchNumber = persons.find((person) => person.number === newNumber)

  // alerts user with a pop up in browser
  // that the person with that name or number
  // is already added to phonebook,
  // also empties the input fields
  const alertUser = () => {
    window.alert(`No contact added, because the name '${newName}' or the number '${newNumber}' is already added to phonebook`)
    reset()
  }

  // creates a new Person and adds it to the persons list
  // and then empties the input fields.
  // The id uses name, but always in lower case
  // this prevents adding "Jane doe" to phonebook
  // if "Jane Doe" (or any other lower case/upper case combination) 
  // is already added
  // the last lines empties the input elements in form,
  // if left out, for example the newName state would not change and
  // the added name would stay on the input field
  // after submitting (and user would have to erase it)
  const savePerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
      id: newName.toLowerCase()
    }
    setPersons(persons.concat(personObject))
    reset()
  }

  return (
    <div>

      <h1> Phonebook </h1>

      <AddFilter filter={newFilter} onChange={handleFilterChange} />

      <h2> Contacts </h2>

      <ShowFiltered contacts={persons} filter={newFilter} />

      <h2> Add a new contact </h2>

      <Form
        onSubmit={addPerson}
        valueName={newName}
        onNameChange={handleNameChange}
        valueNumber={newNumber}
        onNumberChange={handleNumberChange} />
    </div>
  )
}

export default App
