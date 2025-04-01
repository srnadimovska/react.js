function LogIn({ loggedIn }) {
  return (
    <div>
      <h1>Please log in.</h1>
      <button onClick={() => loggedIn(false)}>Login as User</button>
      <button onClick={() => loggedIn(true)}>Login as Admin</button>
    </div>
  );
}

export default LogIn;
