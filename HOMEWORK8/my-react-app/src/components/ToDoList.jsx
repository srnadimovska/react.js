import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext"
import { useState } from "react"
import "./toDoList.css"

const ToDoList = () => {
    const { toDo,  deleteToDo, editToDo , addComplete} = useContext(ToDoContext)
    const [ edit, setEdit] = useState(null)
    const [newTask, setNewTask] = useState('')

    const handleEdit = (index, currentTask) => {
        setEdit(index)
        setNewTask(currentTask)
    }

    const saveEdit = (index) => {
        editToDo(index, newTask)
        setEdit(null)
    }

    if(toDo.length === 0) {
        return <p>Add task to your task list</p>
    }

    return (
        <ul>
            {toDo.map((task, index) => (
                <li key={index}> 
                    <input
                    type="checkbox"
                    checked={task.isCompleted}
                    onChange={() => addComplete(index)}
                    />
                    {edit === index ? 
                        <>
                        <input 
                        type="text"
                        value={newTask}
                        onChange={(event) => setNewTask(event.target.value)}
                        />
                        <button onClick={() => saveEdit(index)}>Save task</button>
                        <button onClick={() => setEdit(null)}>Cancel</button>
                        </>
                     : (
                        <>
                        <p>{task.text}</p>
                        <button onClick={() => handleEdit(index, task.text)}>Edit</button>
                        <button onClick={() => deleteToDo(index)}>Delete</button>
                        </>
                    )}
                    
                </li>
            ))}
        </ul>
    )
}

export default ToDoList