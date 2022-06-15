import { useState, useEffect } from 'react'
import axios from 'axios'
import { Form } from './components/Form'
import { AddFilter, ShowFiltered } from './components/Filter'


//the root component
const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])


  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const reset = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (matchName || matchNumber) {
      alertUser()
    } else {
      savePerson()
    }
  }

  const matchName = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
  const matchNumber = persons.find((person) => person.number === newNumber)

  const alertUser = () => {
    window.alert(`No contact added, because the name '${newName}' or the number '${newNumber}' is already added to phonebook`)
    reset()
  }

  const savePerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }

    axios
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        reset()
      })
  }

  return (
    <div>
      <h1> Phonebook </h1>

      <AddFilter
        filter={newFilter}
        onChange={handleFilterChange}
      />

      <h2> Contacts </h2>

      <ShowFiltered
        contacts={persons}
        filter={newFilter}
      />

      <h2> Add a new contact </h2>

      <Form
        onSubmit={addPerson}
        valueName={newName}
        onNameChange={handleNameChange}
        valueNumber={newNumber}
        onNumberChange={handleNumberChange}
      />
    </div>
  )
}

export default App
