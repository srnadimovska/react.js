import React from "react"

function Grandchild ({grandchild}) {
    return (
        <div>
            <h3>Grandchild: </h3>
            <p>{grandchild.name}</p>
            <h3>Hobby:</h3> 
            <p>{grandchild.hobby}</p>
        </div>
    )
        
}

export default Grandchild