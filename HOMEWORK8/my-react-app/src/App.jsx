import { useState } from 'react'

import './App.css'
import ToDoProvider from './context/ToDoContext'
import AddToDo from './components/AddToDo'
import ToDoList from './components/ToDoList'

function App() {
  
  return (
    
      <ToDoProvider>
        <div className="app-container">
          <h1>My ToDo List</h1>
        <AddToDo />
        <ToDoList/>
        </div>
      </ToDoProvider>
        
    
  )
}

export default App
