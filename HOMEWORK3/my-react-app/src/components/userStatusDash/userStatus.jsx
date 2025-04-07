import AdminPanel from "./adminPanel"
function UserStatus({ isAdmin}) {
    return (
        <div>
            <h1>{isAdmin ? "Welcome Admin!" : "Welcome User"}</h1>
            {isAdmin ? <AdminPanel /> : <p>"This is your user dashboard"</p>}
        </div>
    )
}

export default UserStatus