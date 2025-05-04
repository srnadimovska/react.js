export const START_GAME = "START_GAME"
export const GAME_GUESSES = "GAME_GUESSES"


export const startGame = () => ({
    type: START_GAME,
});

export const numberGuesses = (guess) => ({
    type: GAME_GUESSES,
    payload: guess,
});
