import { useState, useEffect } from 'react'
import personService from './services/persons'
import findService from './services/find'
import { ErrorNotification, SuccessNotification } from './components/Notification'
import { Form } from './components/Form'
import { AddFilter, ShowFiltered } from './components/Filter'


// the root component
// user can filter (search) contacts in the phonebook
// add a new contact,
// change number for contact
// or delete contact
const App = () => {

  // all the different states used in App
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [successMessage, setSuccessMessage] = useState(null)


  // uses personService to set and get the initial list
  // of contacts
  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response.data)
      })
  }, [])


  // sets empty strings newName and newNumber,
  // used to reset the input fields
  // after submitting the new contact creation form
  const reset = () => {
    setNewName('')
    setNewNumber('')
  }


  // three handle functions that follow the changes in
  // the three input fields in the App (name, number and filter)
  // whatever the user types, it is set as a state
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }


  // handles three different situations
  // that can happen after the user wants to add a contact,
  // uses findService functions the check
  // if the number or name of person are already added to phonebook
  const addPerson = (event) => {
    event.preventDefault()
    if (findService.matchNumber(persons, newNumber)) {
      alertUser()
    } else if (findService.matchName(persons, newName)) {
      changeNumber()
    } else {
      savePerson()
    }
  }

  // handles what happens when the user clicks the delete button
  // user has to confirm deletion
  const handleDeletePerson = (personId) => {
    const name = findService.findNameWithId(personId, persons)
    if (window.confirm('Delete ' + name + ' from phonebook?')) {
      removePerson(personId)
    }
  }

  // alerts user that the contact is not added
  const alertUser = () => {
    const numberOwner = findService.findNameWithNumber(newNumber, persons)
    showErrorMessage(`No contact added, because the number ${newNumber} is already saved to phonebook for ${numberOwner}`)
    reset()
  }

  // changes number for a person
  // if the name is already found in the phonebook
  // user has to confirm the change
  const changeNumber = () => {
    if (window.confirm(` ${newName} is already added to phonebook, replace the old number with a new one?`)) {
      changePerson(findService.findIdWithName(newName, persons))
    }
  }


  // uses personService to change the number for a person
  // that is already found in the persons list
  // catches error in a situation where the person is already
  // deleted from server (in another browser window for example)
  const changePerson = (id) => {
    const person = persons.find(n => n.id === id)
    const changedPerson = { ...person, number: newNumber }
    personService
      .update(id, changedPerson)
      .then(response => {
        setPersons(persons.map(person => person.id !== id ? person : response.data))
        showSuccessMessage(`The number ${newNumber} is added to ${newName} `)
      })
      .catch(error => {
        showErrorMessage(`Sorry, the contact ${person.name} was already deleted from server`)
        setPersons(persons.filter(n => n.id !== id))
      })
    reset()
  }



  // saves the contact to the persons list
  // uses personService to create and add the person
  const savePerson = () => {
    const personObject = {
      name: newName,
      number: newNumber,
    }
    personService
      .create(personObject)
      .then(response => {
        setPersons(persons.concat(response.data))
        showSuccessMessage(`The contact with name ${newName} and number ${newNumber} is added to phonebook`)
      })
      .catch(error => {
        showErrorMessage('Sorry, something went wrong: ' + error.response.data.error)
      })
    reset()
  }



  // uses personService to delete person from persons list
  const removePerson = (id) => {
    const name = findService.findNameWithId(id, persons)
    personService
      .deletePerson(id)
      .then(response => {
        setPersons(persons.filter(n => n.id !== id))
        showSuccessMessage(` ${name} is deleted from the phonebook `)
      })
      .catch(error => {
        showErrorMessage('Sorry, something went wrong: ' + error.response.data.error)
      })
  }


  // sets success message in status
  // after three seconds clears the message
  const showSuccessMessage = (message) => {
    setSuccessMessage(message)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)
  }

  // sets error message in status
  // after three seconds clears the message
  const showErrorMessage = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage(null)
    }, 5000)
  }


  return (
    <div>

      <h1> Phonebook </h1>

      <ErrorNotification message={errorMessage} />
      <SuccessNotification message={successMessage} />

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


