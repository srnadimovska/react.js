import { useState , useEffect} from 'react'
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
      <div>
        <button onClick={newRandomUser}>Show random user</button>
        {user && (
            <div>
                <h2>{user.name}</h2>
                <p>{user.city}</p>
                <p>{user.phone}</p>
                <p>{user.company.name}</p>

            </div>
        )}

      </div>
    )

}

export default RandomUserFetcher