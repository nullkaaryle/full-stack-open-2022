import { Country, countCountries, ShowListOfCountries } from './Country'
import { Input } from './Form'
import { TooManyMatches, OneMatchFound, NoMatches } from './Match'

// adds the search term the user types in the search field
// as a filter
// uses Input component
// guides to root App to use function handleFilterChange() 
export const AddFilter = ({ filter, onChange }) => (
    <Input
        text='Find countries: '
        value={filter}
        onChange={onChange} />
)

// filter the list of all countries based on the filter
const filterCountries = (countries, filter) => {
    return (
        countries
            .filter(country => (country.name.common.toLowerCase()).includes(filter.toLowerCase()))
            .map(country => <Country key={country.name.official} country={country} />)
    )
}

// helper function to check if filter is present
// returns true if there is text in the search field
const filterAdded = (filter) => {
    return (filter.length > 0)
}

// goes through four different situations for country list rendering
// uses components from Match and Country as helpers
export const ShowFiltered = ({ countries, filter }) => {
    const filteredCountries = filterCountries(countries, filter)
    const filterIsAdded = filterAdded(filter)
    const numberOfCountries = countCountries(filteredCountries)

    if (numberOfCountries > 10 && filterIsAdded) {
        return <TooManyMatches />

    } else if (numberOfCountries === 0) {
        return <NoMatches />

    } else if (numberOfCountries === 1) {
        return <OneMatchFound matchedCountry={filteredCountries[0].props.country} />

    } else {
        return <ShowListOfCountries list={filteredCountries} />
    }
}
