import axios from 'axios'
const baseUrl = 'https://stunning-death-valley-15123.herokuapp.com/api/persons'

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
