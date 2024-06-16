import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BookingHistory from '../UserHistory/BookingHistory';
import './Dropdown.css';

const Dropdown = () => {
  const navigate = useNavigate();
  const [showHistory, setShowHistory] = useState(false); // State to control history display

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  const handleShowHistory = () => {
    setShowHistory(true); // Set showHistory state to true when History button is clicked
  };

  return (
    <div className="dropdown">
      <div className="dropdown-toggle">
        <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-link" to="/my-profile">
              My Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-link" to="/history" onClick={handleShowHistory}>
              History
            </Link>
          </li>
          <li>
            <Link className="dropdown-link" to="/transaction">
              Transaction
            </Link>
          </li>
          <li>
            <button className="logout-btn" onClick={handleLogout} type="submit">
              Logout
            </button>
          </li>
        </ul>

        {showHistory && <BookingHistory />} {/* Conditionally render BookingHistory component */}
      </div>
    </div>
  );
};

export default Dropdown;
