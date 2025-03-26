import React from "react"
import Child from "./Child"
import "./parent.css"

function Parent ({ family }) {

    return (
        <div>
        <h1>*{family.name}*</h1>
        <div id="parent-div">
            
            {family.children.map((child, index) => (
                <Child key={index} child={child} />
            ))}
        </div>
        </div>
    )
}

export default Parent