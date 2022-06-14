import { useState } from 'react'
import { Button } from './Form'


export const countCountries = (countries) => {
    return countries.length
}


export const ShowListOfCountries= ({list}) => {
    return (
        <ul>
            {list}
        </ul>
    )
}


export const RenderCountryDetails = ({ country }) => {
    return (
        <>
            <h2> {country.name.common} </h2>

            <p> <b> Capital: </b> {country.capital} </p>

            <p> <b> Area: </b> {country.area} </p>

            <p>
                <b> Languages:</b>
                {Object.values(country.languages)
                    .map(value =>
                        <li key={value}> {value} </li>)}
            </p>

            <p> <b> Flag: </b> </p>

            <img
                src={country.flags.png}
                key={country.flags.png}
                alt='flag of the country'
            />

        </>
    )
}


export const Country = ({ country }) => {
    const [detailsShown, setDetailsShown] = useState(false)
    const toggleShowCountryDetails = () => setDetailsShown(!detailsShown)

    return (
        <div>

            <li>
                {country.name.common}
                {' '}
                <Button
                    handleClick={toggleShowCountryDetails}
                    text=" show "
                />
            </li>

            {detailsShown && <RenderCountryDetails key={country.name.official} country={country} />}

        </div>
    )
}
