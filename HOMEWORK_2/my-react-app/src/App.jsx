import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfileClass from './components/userProfileClass/UserProfileClass'
import UserProfileFunction from './components/userProfileFunction/UserProfileFunction'
import ListItem from './components/listItem/ListItem'

function App() {
 return (
  <div>
  <div className='div-app'>
    <div id='column-one'>
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

  <ListItem />
  </div>
  
 )
}

export default App
