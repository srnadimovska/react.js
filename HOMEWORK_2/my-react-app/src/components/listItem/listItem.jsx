import React from "react"
import "./listItem.css"

function ListItem () {

    const tasks = [
        { name: "Learn React", priority: "High" },
        { name: "Do Groceries", priority: "Low" },
        { name: "Exercise", priority: "High" },
        { name: "Read a Book", priority: "Medium" },
    ]
    
    return (
        <div id="list">
            <ul>
                {tasks.map ((task , index) => (
                    <li key={index}>
                        Name:{task.name} 
                        <span>***</span>
                        Priority: {task.priority}
                        </li>
                ))}
                </ul>
        </div>
        
    )
}

export default ListItem
