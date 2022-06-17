
const findNameWithId = (id, persons) => (
    persons.find((person) => person.id === id).name
)

const findNameWithNumber = (number, persons) => (
    persons.find((person) => person.number === number).name
)

const findIdWithName = (name, persons) => ( 
    persons.find((person) => person.name.toLowerCase() === name.toLowerCase()).id
)

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
