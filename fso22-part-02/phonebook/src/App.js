import { useState, useEffect } from 'react'
import personService from './services/persons'
import { Form } from './components/Form'
import { AddFilter, ShowFiltered } from './components/Filter'


//the root component
const App = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
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

  const findNameWithId = (id) => (
    persons.find((person) => person.id === id).name
  )

  const findNameWithNumber = (number) => (
    persons.find((person) => person.number === number).name
  )

  const findIdWithName = (name) => (
    persons.find((person) => person.name.toLowerCase() === name.toLowerCase()).id
  )

  const handleDeletePerson = (personId) => {
    const personName = findNameWithId(personId)
    if (window.confirm('Delete ' + personName + ' from phonebook?')) {
      removePerson(personId)
    }
  }

  const reset = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (matchNumber) {
      alertUser()
    } else if (matchName) {
      confirmNumberChange()
    } else {
      savePerson()
    }
  }

  const matchName = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase())
  const matchNumber = persons.find((person) => person.number === newNumber)

  const alertUser = () => {
    const numberOwner = findNameWithNumber(newNumber)
    window.alert(`No contact added, because the number ${newNumber} is already added to phonebook for ${numberOwner}`)
    reset()
  }

  const confirmNumberChange = () => {
    if (window.confirm(` ${newName} is already added to phonebook, replace the old number with a new one?`)) {
      updatePerson(findIdWithName(newName))
      reset()
    }
  }

  const updatePerson = (id) => {
    const person = persons.find(n => n.id === id)
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(id, changedPerson)
      .then(response => {
        setPersons(persons.map(person => person.id !== id ? person : response.data))
      })
  }

  const savePerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        reset()
      })
  }

  const removePerson = (id) => {
    personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(n => n.id !== id))
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
        buttonFunction={handleDeletePerson}
      />

      <h2> Add a new contact </h2>

      <Form
        onSubmit={addPerson}
        valueName={newName}
        onNameChange={handleNameChange}
        valueNumber={newNumber}
        onNumberChange={handleNumberChange}
        buttonText='ADD CONTACT'
      />
    </div>
  )
}

export default App
