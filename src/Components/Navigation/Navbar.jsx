import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Navbar.css";
import { Link } from "react-router-dom";
import Dropdown from './Dropdown';



const Navbar = () => {

  const [dropdown, setDropdown] = useState(false);
  const [getUserData, setUserData] = useState({});




  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/v/user/profile');
        setUserData(response.data.data);

        // console.log(response.data)
        // console.log(getUserData)
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  // console.log(getUserData);

  return (
    <nav id="navbar">
      <Link to="/" className="logo">
        <i className="fas fa-shopping-basket"></i>
        <div>
          Explore<span>Ease.</span>
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {
        !localStorage.getItem("authToken") ? (

          <div className="logsign">
            <button type="button" className="btn">
              <Link to="/login">Login</Link>
            </button>
            <button type="button" className="btn">
              <Link to="/signup">Signup</Link>
            </button>
          </div>

        ) : (
          <div className="profile-main">
            <div className="profile" onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
              <div>{getUserData.avatar && <img src={getUserData.avatar} alt="" className="navbar-avatar"/>} </div>
              {dropdown && <Dropdown />}
            </div>

            <div className="profile-name">{getUserData.fullname}</div>
          </div>
        )
      }


    </nav>
  );
};

export default Navbar;
