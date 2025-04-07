import { useState , useEffect} from 'react'
import "./randomUserFetch.css"
function RandomUserFetcher () 
{

    const [ user, setUser] = useState(null)
    const [userId, setUserId] = useState(null)
    

    useEffect(() => {
        if(userId === null) return

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
    }, [userId])

    const newRandomUser = () => {
        const randomUserId = Math.floor(Math.random() *10) +1
        setUserId(randomUserId)
    }

    

    return (
      <div className='user-container'>
        <button onClick={newRandomUser}>Show random user</button>
        {user && (
            <div className='user-div'>
                <h2>Name: {user.name}</h2>
                <p>City: {user.address.city}</p>
                <p>Phone: {user.phone}</p>
                <p>Company: {user.company.name}</p>

            </div>
        )}

      </div>
    )

}

export default RandomUserFetcher