import { useState, useEffect } from 'react'
import axios from 'axios'

// returns weather for a specific capital city,
// uses state to save weather,
// apiKey is given on start,
// state is not always updated instantly,
export const GetWeather = ({ city }) => {
    const capitalCity = city[0]
    const apiKey = process.env.REACT_APP_API_KEY
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + capitalCity + '&units=metric&APPID=' + apiKey + ''
    const [weather, setWeather] = useState([])

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                setWeather(response.data)
            })
    }, [url])
    

    // Uses Elvis operator ?:
    // if weather is undefined, component will still render and not crash.
    // Could use OR message like this
    // const temperature = weather?.main?.temp || 'Temperature is loading...'
    // initial values for variables could also be used.
    const temperature = weather?.main?.temp
    const feelsLike = weather?.main?.feels_like
    const wind = weather?.wind?.speed
    const humidity = weather?.main?.humidity
    const description = weather?.weather?.[0].description
    const icon = weather?.weather?.[0].icon

    return (
        <div>
            
            <h3> The weather in {capitalCity} right now:  {description} </h3>
            
            {/* prevents trying to get the image if url contains still undefined icon at first render */}
            {icon !== undefined && <img
                src={'http://openweathermap.org/img/wn/' + icon + '@4x.png'}
                alt='weather icon'
            />}

            <p> Temperature: {' '}  {temperature} °C ( feels like {feelsLike} °C)</p>

            <p> Wind: {' '} {wind} m/s </p>

            <p> Humidity: {' '} {humidity} % </p>

        </div>
    )
}


