import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfileClass from './components/userProfileClass/UserProfileClass'
import UserProfileFunction from './components/userProfileFunction/UserProfileFunction'
import ListItem from './components/listItem/ListItem'
import Parent from './components/familyTree/Parent'

function App() {

  const tasks = [
    { name: "Learn React", priority: "High" },
    { name: "Do Groceries", priority: "Low" },
    { name: "Exercise", priority: "High" },
    { name: "Read a Book", priority: "Medium" },
]

  const family = {
    name: "John (Parent)",
    children: [
        {
            name: "Alex (Child)",
            age: 30,
            grandchildren: [
                { name: "Liam ", hobby: "Playing Soccer" },
                { name: "Sophia ", hobby: "Drawing" },
            ],
        },
        {
            name: "Emma (Child)",
            age: 28,
            grandchildren: [{ name: "Noah ", hobby: "Reading" }],
        },
    ],
}

 return (
  <div>
  <div className='div-app'>
    
    <div id='column-one'>
    <h1>Class component</h1>
    <UserProfileClass 
    name="Maja"
    age="30"
    hobby="Playing Piano"
     />
     <UserProfileClass 
    name="Ana"
    age="30"
    hobby="Reading Books"
     />
     <UserProfileClass 
    name="Monika"
    age="25"
    hobby="Pilates"
     />
     </div>
     
     <div id='column-two'>
     <h1>Functional component</h1>
      <UserProfileFunction
      name="Maja"
      age="30"
      hobby="Playing Piano"
       />
      <UserProfileFunction
      name="Ana"
      age="30"
      hobby="Reading Books"
       />
      <UserProfileFunction
      name="Monika"
      age="25"
      hobby="Pilates"
      />
     </div>
  </div>
<div id="list-div">
  <ListItem tasks={tasks}/>
  </div>
  <Parent family={family}/>

  </div>
  
 )
}

export default App
