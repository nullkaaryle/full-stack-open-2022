
// two helper functons to find name
// if contact's id or number is known
// returns name
const findNameWithId = (id, persons) => (
    persons.find((person) => person.id === id).name
)

const findNameWithNumber = (number, persons) => (
    persons.find((person) => person.number === number).name
)

// helper function to find id 
// if name of the person is known
// returns id
const findIdWithName = (name, persons) => ( 
    persons.find((person) => person.name.toLowerCase() === name.toLowerCase()).id
)

// two helper function to check if number or name
// are already found ind persons list
// returns true or false
const matchName = (persons, name) => (
    persons.find((person) => person.name.toLowerCase() === name.toLowerCase())
)

const matchNumber = (persons, number) => (
    persons.find((person) => person.number === number)
)


const findService = {
    findNameWithId,
    findNameWithNumber,
    findIdWithName,
    matchNumber,
    matchName
}

export default findService
