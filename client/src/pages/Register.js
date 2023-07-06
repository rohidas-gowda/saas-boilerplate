import React, { useState } from "react";
import "../pages/Register.css";
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const isRegister = await response.json();
    if(isRegister.status) {
      navigate('/login');
    } else {
      console.log("email already exists")
    }
  }

  return (
    <div id="register-container">
      <div>
        <form id="register-form" onSubmit={registerUser}>
          <div id="register-form__header">Register</div>
          <div id="register-form__name">
            <input
              className="register-form__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
            />
          </div>

          <div id="register-form__email">
            <input
              className="register-form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </div>

          <div id="register-form__password">
            <input
              className="register-form__input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <div id="register-form__submit">
            <button id="register-form__submit__btn" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
