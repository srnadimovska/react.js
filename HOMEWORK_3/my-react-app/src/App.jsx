import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import UserStatus from "./components/userStatusDashboard/userStatus";
import LogIn from "./components/userStatusDashboard/logIn";
import MoodDisplay from "./components/moodTrackerApp/moodDisplay";
import MoodSelector from "./components/moodTrackerApp/moodSelector";

import BookLibrary from "./components/myBookLibrary/bookLibrary";

function App() {
  const [ isLoggedIn, setIsLoggedIn] = useState(false)
  const [ isAdmin, setIsAdmin] = useState(false)

  const logIn = (user) => {
    setIsLoggedIn(true)
    setIsAdmin(user)
  }
  const logOut = () => {
    setIsLoggedIn(false)
    setIsAdmin(false)
  }

  // const [currentMood, setCurrentMood] = useState("Happy")
  // const changeMood = (newMood) => {
  //   setCurrentMood(newMood)
  // }

  return (
    <>
      <div>
        <div>
          <h1>User Status Dashboard</h1>
          {isLoggedIn ? (
            <div>
              <UserStatus isAdmin={isAdmin} />
              <button onClick={logOut}>Logout</button>
            </div>
          ) : (
            <LogIn loggedIn={logIn} />
          )}
        </div>

        {/* <div>
          <h1>Mood Tracker App</h1>
          <MoodSelector moodChange={changeMood} />
          <MoodDisplay currentMood={currentMood} />
        </div> */}
        {/* <div>

      <BookLibrary />

      </div> */}
      </div>
    </>
  );
}

export default App;
