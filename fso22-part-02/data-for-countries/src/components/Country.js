import { useState } from 'react'
import { Button } from './Form'
import { GetWeather } from './Weather'

// counts the number of countries in the given list
export const countCountries = (countries) => {
    return countries.length
}

// helper for rendering countries in list style
export const ShowListOfCountries = ({ list }) => {
    return (
        <ul>
            {list}
        </ul>
    )
}

// renders the detailed information of one country
// uses Weather component for showing weather in the country capital
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

            <GetWeather city={country.capital} />

        </>
    )
}

// defines how the individual countries are rendered in the list
// uses detailsShown boolean as a check 
// if also the country details should be shown in the list
// user toggles the country details by pressing a button
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
