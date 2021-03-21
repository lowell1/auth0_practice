import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const auth0 = useAuth0();
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = auth0;

  if (isLoading) return <p>loading...</p>;

  console.log(auth0);

  return (
    <div>
      {isAuthenticated ? (
        <>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            log out
          </button>
        </>
      ) : (
        <button onClick={loginWithRedirect}>log in</button>
      )}
    </div>
  );
}

export default App;
