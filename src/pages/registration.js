  import { useNavigate } from 'react-router-dom';
  import './style.css';
  import axios from "axios"
  import { useState } from 'react';

  function Register() {
    const navigate = useNavigate();

    const[email, setEmail]=useState('')
    const[password, setPassword]=useState('')

    async function SubmitEvent(e){
      e.preventDefault();
    
        try{
          await axios.post("http://localhost:8000/register", {
            email, password 
          })
          .then(res=>{
            if (res.data === "exist") {
              alert("User already exists")
            } 
            else if (res.data === "notexist") {
                navigate("/home",{state:{id:email}})
            }
          })
          .catch(e=>{
            alert("Wrong details")
          })
        }
        catch(e){
          console.log(e)
        }
      }

    const validateForm = () => {
      const gmailInput = document.getElementById('gmail');
      const passwordInput = document.getElementById('password');
      const confirmPasswordInput = document.getElementById('confirm-password');
      const errorMessage = document.querySelector('.error-message');

      if (!gmailInput.value.endsWith('@gmail.com')) {
        errorMessage.textContent = 'Please enter a valid Gmail email address';
        gmailInput.focus();
        return false;
      }

      if (!gmailInput.value) {
        errorMessage.textContent = 'Please enter your gmail';
        passwordInput.focus();
        return false;
      }


      if (!passwordInput.value) {
        errorMessage.textContent = 'Please enter your password';
        passwordInput.focus();
        return false;
      }

      if (passwordInput.value !== confirmPasswordInput.value) {
        errorMessage.textContent = 'Passwords do not match';
        confirmPasswordInput.focus();
        return false;
      }

      return true;
    };

    return (
      <div>
        <div className="wrapper">
          <form onSubmit={validateForm} method='POST'>
            <h1>Registration</h1>

            <div className="input-box">
              <input id="username" type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
            </div>

            <div className="input-box">
              <input id="password" type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>

            <div className="input-box">
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
              />
            </div>

            <div className="input-box radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="user-type"
                  value="planner"
                  className="radio-input"
                />
                Planner
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  name="user-type"
                  value="attendee"
                  className="radio-input"
                />
                Attendee
              </label>
            </div>

            <div className="error-message" style={{ color: 'red' }}></div>

            <button type="submit" onClick={SubmitEvent} className="btn" >
              Register
            </button>

            <div className="register-link">
              <p>Already have an account?</p>
              <p onClick={() => {
                navigate('/login');
              }}>
                Login
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default Register;
