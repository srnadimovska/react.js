import { useState } from "react"
import "./colorPicker.css"


function ColorPicker() {

    const [color, changeColor] = useState(" #ffffff")


    const chooseColor = (newColor) => {
        changeColor(newColor)
    }



    return (
        <>
        <div className="button-div">

            <button onClick={() => chooseColor(" #FF0000")}>Red</button>
            <button onClick={() => chooseColor(" #008000")}>Green</button>
            <button onClick={() => chooseColor(" #FFFF00")}>Yellow</button>
            <button onClick={() => chooseColor(" #0000FF")}>Blue</button>

        </div>
        <div 
        style={{
            backgroundColor: color,
            width: "440px",
            height: "100px",
            marginTop: "20px",
            }}
            >
            
        </div>
        </>

    )
}

export default ColorPicker