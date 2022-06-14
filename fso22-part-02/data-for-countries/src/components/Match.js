import { RenderCountryDetails } from './Country';

export const TooManyMatches = () => {
    return 'Too many matches, specify another filter'
}

export const NoMatches = () => {
    return 'No countries found'
}

export const OneMatchFound = ({matchedCountry}) => {
    return (
        <RenderCountryDetails key={matchedCountry.name.official} country={matchedCountry} />
    )
}
