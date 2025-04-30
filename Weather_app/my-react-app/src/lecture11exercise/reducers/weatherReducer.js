import {FETCH_WEATHER_DATA, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE} from "../actions/fetchWeatherActions"

const initialState = {
    weather: null,
    error: "",
    loading:false
}

const weatherReducer = ( state = initialState, action) => {
    switch(action.type){
        case FETCH_WEATHER_DATA:
            return{...state, loading:true}
        case FETCH_WEATHER_SUCCESS:
            return{...state, weather:action.payload, loading:false}
        case FETCH_WEATHER_FAILURE:
            return{...state, weather:[],loading:false, error:action.payload.message}
            default:
                return state;
    }
    
};

export default weatherReducer

