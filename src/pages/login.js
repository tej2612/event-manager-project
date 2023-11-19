import { useNavigate } from 'react-router-dom';
import './style.css';
import React, {useState } from "react"
import axios from "axios"


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function SubmitEvent(e) {
    e.preventDefault();

    try 
    {
    await axios.post("http://localhost:8000/login", {
        email,password
      })

      .then(res=>{
        if (res.data === "exist") {
          navigate("/home", {state:{id:email}});
        } 
        else if (res.data === "notexist") {
          alert("User hasn't registered")
        }
      })
      .catch(e=>{
        alert("Wrong details")
      })
    } 
    
    catch(e) 
    {
      console.log(e);
    }
  }

  const validateForm = () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.querySelector('.error-message');

    if (!usernameInput.value || !usernameInput.value.endsWith('@gmail.com')) {
      errorMessage.textContent = 'Please enter a valid Gmail email address';
      usernameInput.focus();
      return false;
    }

    if (!passwordInput.value) {
      errorMessage.textContent = 'Please enter your password';
      passwordInput.focus();
      return false;
    }

    return true;
  };

  return (
    <div>
      <div className="wrapper">
        <form action="POST" onSubmit={validateForm}>
          <h1>Login</h1>

          <div className="input-box">
            <input id="username" type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
          </div>

          <div className="input-box">
            <input id="password" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />

            <i className="bx bxs-lock-alt" onClick="togglePasswordVisibility()"></i>
          </div>

          <div className="error-message" style={{ color: 'red' }}></div>

          <button type="submit" onClick={SubmitEvent} className="btn">
            Login
          </button>

          <div className="register-link">
            <p onClick={() => {
              navigate('/register');
            }}>
              Don't have an account? Register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
