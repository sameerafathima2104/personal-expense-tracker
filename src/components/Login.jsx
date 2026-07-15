import React from "react";

function Login({ login }) {

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

                <input
                    type="text"
                    placeholder="Enter your name"
                    id="username"
                />

                <button onClick={() => login()}>
                    Login
                </button>

                <p className="small-text">
                    Start managing your finances smarter!
                </p>

            </div>

        </div>
    );
}

export default Login;