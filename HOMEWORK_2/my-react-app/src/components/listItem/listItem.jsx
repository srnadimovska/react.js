import React from "react"
import "./listItem.css"

function ListItem ({ tasks}) {

    // const tasks = [
    //     { name: "Learn React", priority: "High" },
    //     { name: "Do Groceries", priority: "Low" },
    //     { name: "Exercise", priority: "High" },
    //     { name: "Read a Book", priority: "Medium" },
    // ]
    
    return (
        <div id="list">
            
            <ul>
            <h1>Task list:</h1>
                {tasks.map ((task , index) => (
                    <li key={index}>
                        
                        <h2>Task: {task.name} </h2>
                        <span>----</span>
                        <p>Priority: {task.priority}</p>
                        </li>
                ))}
                </ul>
        </div>
        
    )
}

export default ListItem
