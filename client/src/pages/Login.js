import React, { useState } from "react";
import "../pages/Login.css";
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:1337/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const isLogin = await response.json();
        if (isLogin) {
            navigate('/app')
        } else {
            console.log("Not registered");
        }
    }
    return (
        <div id="login-container">
            <div>
                <form id="login-form" onSubmit={loginUser}>
                    <div id="login-form__header">Login</div>
                    <div id="login-form__email">
                        <input
                            className="login-form__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>

                    <div id="login-form__password">
                        <input
                            className="login-form__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div id="login-form__submit">
                        <button id="login-form__submit__btn" type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login