
export const CountryName = ({ country }) => {
    return (
        <li>
            {country.name.common}
        </li>
    )
}

export const CountryDetail = ({ country }) => {
    return (
        <>
            <h2> {country.name.common} </h2>

            <p> <b> Capitaal: </b> {country.capital} </p>

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
            />

        </>
    )
}
