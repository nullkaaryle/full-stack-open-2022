import { CountryName, CountryDetail } from './Country'
import { Input } from './Form'

export const AddFilter = (props) => (
    <>
        <Input
            text='Find countries: '
            value={props.filter}
            onChange={props.onChange} />
    </>
)

const FilterCountries = (props) => {
    return (
        props.countries
            .filter(country => (country.name.common.toLowerCase()).includes((props.filter).toLowerCase()))
            .map(country => <CountryName key={country.name.official} country={country} />)
    )
}

export const ShowFiltered = (props) => {
    const filteredCountries = FilterCountries(props)

    if (filteredCountries.length > 10 && props.filter.length > 0) {
        return (
            'Too many matches, specify another filter'
        )

    } else if (filteredCountries.length === 1) {
        const filteredCountry = filteredCountries[0].props.country
        return (
            <CountryDetail key={filteredCountry.name.official} country={filteredCountry} />
        )

    } else if (filteredCountries.length === 0) {
        return (
            'No countries found'
        )
    }

    return (
        <ul>
            {filteredCountries}
        </ul>
    )
}

