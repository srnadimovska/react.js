import { useDispatch, useSelector } from "react-redux";
import { numberGuesses, startGame } from "../actions/gameActions";
import { useRef, useState, useEffect } from "react";
import "../components/game.css"

function Game() {
    const { correctNumber, numberOfGuesses, attempts, guessingStatus } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [input, setInput] = useState('');

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current?.focus();
    }, [guessingStatus]);

    const guessInput = () => {
        const guess = Number(input);
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Please enter valid number between 1 and 100!");
            return;
        }
        dispatch(numberGuesses(guess));
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            guessInput();
        }
    };

    const startNewGame = () => {
        dispatch(startGame());
        setInput('');
        inputRef.current?.focus();
    };

    return (
        <div className="game-container">
            <h1>GUESS THE NUMBER BETWEEN 1 - 100</h1>
            <input
            ref={inputRef}
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Enter a number"
            />
            <button onClick={guessInput}>TRY</button>
            {guessingStatus && <p id="guessing-status">{guessingStatus}</p>}
            <p>Number of attempts: {attempts}</p>
            <p>Your guesses: {numberOfGuesses.join(',')}</p>
            {guessingStatus === 'Correct!' && (
                <div>
                <h2>TRY NEW GAME</h2>
                <button onClick={startNewGame}>Start new game</button>
                </div>
            )}
            
        </div>
    )
}

export default Game