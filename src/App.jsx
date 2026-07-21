import "./App.css";
import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {

    setUser(userData);
    setLoggedIn(true);

  };

  return (

    <>

      {loggedIn ? (

        <Dashboard user={user} />

      ) : (

        <Login login={handleLogin} />

      )}

    </>

  );

}

export default App;