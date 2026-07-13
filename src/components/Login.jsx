import { useState } from "react";

function Login({ login }) {

    const [name, setName] = useState("");

    const handleLogin = () => {
        if (name.trim() !== "") {
            login();
        } else {
            alert("Please enter your name");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>

            <h1>Personal Expense Tracker</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <button onClick={handleLogin}>
                Login
            </button>

        </div>
    );
}

export default Login;