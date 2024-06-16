import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import image1 from "../Media/image1.jpg";



const Login = () => {

  let navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`/api/v/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem('email', formData.email);
      localStorage.setItem('authToken', data.authToken);

      console.log(localStorage.getItem('email'));
      console.log(localStorage.getItem('authToken'));

      navigate('/');
    }
    else {
      alert("Enter Valid Credentials");
    }

  };


  return (
    <div className='main-login '>
    <div className="background">
      <img src={image1} alt='image'></img>
    </div>
    <div className="login">
      <div className="login-cart">

        <form className="form" onSubmit={handleSubmit}>
          <h1 className='heading'>Login</h1>

          <label htmlFor='email' id='email'> Email </label><br></br>
          <input type='text' name='email'
            placeholder='Enter your username'
            value={formData.fullname}
            onChange={handleChange}
            required
          ></input><br />

          <label htmlFor='password' id='password'>Password </label><br></br>
          <input type='password' name='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Enter your password'>
          </input><br />

          <div className="btn_log">
            <button type='submit' id='btn' className='btn'>Login</button>
          </div>
          <div className="reg_for">
            <p>Forget Your Password ! <Link to='/'>Click Here.</Link></p>
            <p>Dont Have an Account !<Link to='/signup'>Register.</Link></p>

            <h3>Or Signup Using...</h3>
          </div>


        </form>
      </div>

      <div className="loginBack">
        <p>Welcome , PLease Login</p>
      </div>
    </div>
  </div>
  )
}

export default Login