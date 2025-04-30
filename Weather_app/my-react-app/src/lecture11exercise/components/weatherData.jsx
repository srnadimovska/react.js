import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../actions/fetchWeatherActions";
import { useState } from "react";


const WeatherData = () => {
    const { weather, error, loading} = useSelector(state => state)

    const dispatch = useDispatch()
    const [city, setCity] = useState("")

    
    const searchCity = () => {
        if(city) {
            dispatch(fetchWeatherData(city))
        }
        
    };

    return (
        <>
        <h1>Weather APP</h1>
        <input type="text" value={city} onChange={e => setCity(e.target.value)}/>
        <button onClick={searchCity}>Search city</button>

        {loading && <p>The page is loading</p>}
        {error && <p>Error</p>}
        {weather && (
            <ul>
            <li key={weather.id}>
                <p>{weather.name}</p>
                <p>{weather.sys.country}</p>
                <p>{weather.weather[0].main}</p>
                <p>{weather.weather[0].description}</p>
                <p>{weather.main.temp}</p>
            </li>

        </ul>

        )}
        
        
        
        </>
    )
}

export default WeatherData
