import { useState } from "react";

function Login({ login }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

    localStorage.setItem("token", data.token);

    alert("Login successful!");

    login(data.user);

}

        } catch (error) {

            console.error("Login error:", error);

            alert("Unable to connect to server");

        }

    };

    return (

        <div className="login-page">

            <div className="login-card">

                <div className="logo">
                    $
                </div>

                <h1>Personal Expense Tracker</h1>

                <p className="tagline">
                    Track your expenses. Take control of your money.
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

                <p className="small-text">
                    Manage your money smarter!
                </p>

            </div>

        </div>

    );

}

export default Login;