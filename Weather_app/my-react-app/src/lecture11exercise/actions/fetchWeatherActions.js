export const FETCH_WEATHER_DATA = "FETCH_WEATHER_DATA"
export const FETCH_WEATHER_SUCCESS = "FETCH_WEATHER_SUCCESS"
export const FETCH_WEATHER_FAILURE = "FETCH_WEATHER_FAILURE"

export const fetchWeatherRequest = () => ({
    type: FETCH_WEATHER_DATA,
})

export const fetchWeatherSuccess = (weather) => ({
    type: FETCH_WEATHER_SUCCESS,
    payload: weather
})

export const fetchWeatherFailure = (error) => ({
    type: FETCH_WEATHER_FAILURE,
    payload: error
})

export const fetchWeatherData = (city) => {
    return (dispatch) => {
        dispatch(fetchWeatherRequest())
        const apiKey = "14d51e2deaaeb45160c896c2b2e8c85a";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then ((res) => res.json())
        .then ((data) => {
            dispatch(fetchWeatherSuccess(data))
        })
        .catch((error) => {
            dispatch(fetchWeatherFailure(error.message))
        });
    }
        
};

