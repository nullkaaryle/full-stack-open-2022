import { Country, countCountries, ShowListOfCountries } from './Country'
import { Input } from './Form'
import { TooManyMatches, OneMatchFound, NoMatches } from './Match'


export const AddFilter = ({ filter, onChange }) => (
    <Input
        text='Find countries: '
        value={filter}
        onChange={onChange} />
)


const filterCountries = (countries, filter) => {
    return (
        countries
            .filter(country => (country.name.common.toLowerCase()).includes(filter.toLowerCase()))
            .map(country => <Country key={country.name.official} country={country} />)
    )
}


const filterAdded = (filter) => {
    return (filter.length > 0)
}


export const ShowFiltered = ({ countries, filter }) => {
    const filteredCountries = filterCountries(countries, filter)
    const filterIsAdded = filterAdded(filter)
    const numberOfCountries = countCountries(filteredCountries)

    if (numberOfCountries > 10 && filterIsAdded) {
        return <TooManyMatches />

    } else if (numberOfCountries === 0) {
        return <NoMatches />

    } else if (numberOfCountries === 1) {
        return  <OneMatchFound matchedCountry={filteredCountries[0].props.country} />

    } else {
        return <ShowListOfCountries list={filteredCountries} />
    }
}
