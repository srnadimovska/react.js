import { START_GAME, GAME_GUESSES } from "../actions/gameActions";

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const initialState = {
    correctNumber: getRandomNumber(),
    numberOfGuesses: [],
    attempts: 0,
    guessingStatus: '',


}

const gameReducer = ( state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                ...state,
                correctNumber: getRandomNumber(),
                numberOfGuesses:[], 
                attempts: 0,
                guessingStatus: '',

            }

            case GAME_GUESSES:{
                const number = action.payload;
                const updatedGuesses = [ ...state.numberOfGuesses,number];
                const attempts = updatedGuesses.length;

                let guessingStatus = ''
                if(number > state.correctNumber) {
                    guessingStatus = 'Too high!'
                } else if (number < state.correctNumber) {
                    guessingStatus = 'Too low!'
                } else {
                    guessingStatus = 'Correct!'
                } 
                
                return {
                    ...state,
                    numberOfGuesses: updatedGuesses,
                    attempts,
                    guessingStatus,

                }
            }
            

                default:
                    return state;
            
    }
}


export default gameReducer