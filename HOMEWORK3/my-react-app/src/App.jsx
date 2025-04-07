import { useState } from 'react'

import './App.css'
import MoodSelector from './components/moodTracker/moodSelector'
import MoodDisplay from './components/moodTracker/moodDisplay'
import UserStatus from './components/userStatusDash/userStatus'
import LogIn from './components/userStatusDash/logIn'
import BookLibrary from './components/myBookLibrary/bookLibrary'

function App() {

  const [ currentMood , setCurrentMood] = useState("Happy")
  const changeMood = (newMood) => {
    setCurrentMood(newMood)
  }

  const [ isLoggedIn , setIsLoggedIn] = useState(false)
  const [ isAdmin , setIsAdmin ] = useState(false)

  const logIn = () => {
    setIsLoggedIn(true)
    setIsAdmin(true)
  }
  
  const logOut = () => {
    setIsLoggedIn(false)
    setIsAdmin(false)
  }

  return (
    <>
      <div>
        <div>
          <h1>MoodTracker APP</h1>
          <MoodSelector moodChange={changeMood} />
          <MoodDisplay currentMood={currentMood}/>
        </div>

        <div>
          <h1>User Status Dashboard</h1>
          {isLoggedIn ? (
            <div>
              <UserStatus isAdmin={isAdmin} />
              <button onClick={logOut}>Logout</button>
            </div>
          ) : (
            <LogIn loggedIn={logIn}/>
          )}
        </div>

        <div>
          <BookLibrary />
        </div>
        
      </div>
      
    </>
  )
}

export default App
