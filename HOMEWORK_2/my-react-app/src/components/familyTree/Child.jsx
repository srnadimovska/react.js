import React from "react"
import Grandchild from "./Grandchild"
import "./child.css"

function Child ({ child }) {
    return (
        <div id="child-div">
            <h2>{child.name}</h2>
            <p>Age: {child.age}</p>
            {child.grandchildren.map((grandchild , index) => (
                <Grandchild key={index} grandchild={grandchild} />
            ))}
        </div>
    )
}

export default Child
