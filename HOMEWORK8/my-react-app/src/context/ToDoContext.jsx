import { createContext , useState } from "react"

export const ToDoContext = createContext()

export const ToDoProvider = ({children}) => {
    const [toDo, setToDo] = useState([])

    
    const addToDo = (task) => {
        const newTask = {
            text: task.trim(),
            isCompleted: false,
        }
        if(newTask.text) {
            setToDo([...toDo, newTask])
        }
        
    }

    const deleteToDo = (index) => {
        setToDo(toDo.filter((_, i) => i !== index))
    }

    const editToDo = (index, newTask) => {
        setToDo(toDo.map((task,i)=> i === index ? {...task, text: newTask } : task))
    }

    const addComplete = (index) => {
        setToDo(toDo.map((task, i) => i === index ? {...task, isCompleted: !task.isCompleted} : task))
    }

    return (
        <ToDoContext.Provider value={{ toDo, addToDo, deleteToDo, editToDo, addComplete}}>
            {children}
        </ToDoContext.Provider>
    )

}

export default ToDoProvider