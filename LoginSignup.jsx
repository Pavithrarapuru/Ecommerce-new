import React, { useState } from 'react'
import './css/login.css'
const LoginSignup = () => {


  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""

  })

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = async () => {
    console.log("login function executed", formData)
    let responseData;
    await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }
  const signup = async () => {
    console.log("signup function executed", formData)

    let responseData;
    await fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors)
    }
  }


  return (
    <div className='loginsignup'>
      <div className="loginsignupcontainer">
        <h1 className='signup'>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Enter your name' /> : <></>}
          <input type="email" value={formData.email} onChange={changeHandler} name="email" id="" placeholder='Enter your mail id' />
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Enter your password' />

        </div>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ?
          <p className='login'>Already have an account <span onClick={() => { setState("Login") }}>Login</span></p> :
          <p className='login'>No account ? Create an account<span onClick={() => { setState("Sign Up") }}> Click here</span></p>}

      </div>

    </div>
  )
}

export default LoginSignup
