import { useState, useEffect } from 'react'
import axios from 'axios'
import { AddFilter, ShowFiltered } from './components/Filter'

// the root component
// uses Filter component for rendering
const App = () => {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all?fields=name,capital,languages,area,flags')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Data for countries</h1>

      <AddFilter
        filter={filter}
        onChange={handleFilterChange}
      />

      <ShowFiltered
        countries={countries}
        filter={filter}
      />

    </div>
  )
}

export default App

//RESTCountries REST API:

//ALL
//https://restcountries.com/v3.1/all

//NAME
//Search by country name. 
//It can be the native name or partial name
//https://restcountries.com/v3.1/name/{name}
//https://restcountries.com/v3.1/name/peru

//FILTER RESPONSE
//You can filter the output of your request 
//to include only the specified fields.
//https://restcountries.com/v2/{service}?fields={field},{field},{field}
//https://restcountries.com/v2/all?fields=name,capital,languages,area,flag
