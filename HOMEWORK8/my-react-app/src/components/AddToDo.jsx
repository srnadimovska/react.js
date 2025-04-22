import { useContext } from "react"
import { useState } from "react"
import { ToDoContext } from "../context/ToDoContext"
import "./addToDo.css"
    

const AddToDo = () => {
    const [ task, setTask] = useState("")
    const { addToDo } = useContext(ToDoContext)

    const handleAdd = () => {
        addToDo(task)
        setTask("")
    }

    return (
        <div className="input-container">
            <label>Enter a task:</label>
            <input
            type="text"
            value={task}
            placeholder="Enter a task"
            onChange={(event) => setTask(event.target.value)}
            />
            <button onClick={handleAdd}>
                Add task
            </button>
        </div>
    )
}

export default AddToDo