function LogIn ({ loggedIn}) {
    return (
        <div>
            <h1>Please log</h1>
            <button onClick={() => loggedIn(false)}>Login as user</button>
            <button onClick={() => loggedIn(true)}>Login as admin</button>
        </div>
    )
}

export default LogIn