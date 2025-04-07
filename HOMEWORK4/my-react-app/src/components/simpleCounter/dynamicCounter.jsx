import { useState, useEffect } from 'react'


function DynamicCounter () {

    const [count, setCount] = useState(0)
    const [ backgroundColor, setBackgroundColor] = useState('white')


    useEffect(() => {
        console.log("Count is ready")

        if( count > 0) {
            setBackgroundColor('green')
        } else if ( count < 0 ) {
            setBackgroundColor('red')
        } else {
            setBackgroundColor('white')
        }
    },[count])

    const resetButton = () => {
        setCount(0)
    }

    const underValue = () => {
        if (count > -10)
            setCount(count -1)
    }


    return (
        <div style={{ backgroundColor:backgroundColor}}>
        <h1>Dynamic Counter</h1>
        <h2>Increment</h2>
        <button onClick={() => setCount(count + 1)}>INCREASE</button>
        <h2>Decrement</h2>
        <button onClick={underValue}>DECREASE</button>
        <h2>Reset</h2>
        <button onClick={resetButton}>RESET</button>
        <p>The number is {count}</p>
        
        </div>
    )

}
export default DynamicCounter