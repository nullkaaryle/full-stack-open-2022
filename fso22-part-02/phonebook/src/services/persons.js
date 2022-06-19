import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

// using axios to handle persons list operations
// using baseUrl for get, post, put and delete

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const personService = {
    getAll, 
    create, 
    update, 
    deletePerson
}

export default personService
