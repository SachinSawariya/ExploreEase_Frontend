import React, { useState } from "react";
import "./Train.css";
import axios from "axios";

const Train = () => {
  const [from, setFrom] = useState("");
  const [date, setDate] = useState("");
  const [to, setTo] = useState("");
  const [trainDetails, setTrainDetails] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Adjust this value as per your requirement

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v/getTrainOnDate", {
        from,
        to,
        date,
      });
      const data = response.data.data;
      setTrainDetails(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Logic to paginate the data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = trainDetails.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="train">
      <form className="search-box" onSubmit={handleSearch}>
        <h1 className="train_details">Get Train Details</h1>
        <div className="search-input">
          <div className="search-input-box">
            <label htmlFor="from" className="from">
              <span className="text-from"> From:</span>
              <input
                type="text"
                name="from"
                id="from"
                placeholder="City or Station"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </label>
          </div>
          <div className="search-input-box">
            <label htmlFor="to" className="to">
              <span className="text-from"> To:</span>
              <input
                type="text"
                name="to"
                id="to"
                placeholder="City or Station"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </label>
          </div>
          <div className="search-input-box">
            <label htmlFor="date" className="date">
              <span className="text-from"> Date:</span>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
          </div>
        </div>
        <button type="submit" className="train-btn ">
          Search
        </button>
      </form>

      {/* Display the current page items */}
      <div className="train-container">
        {currentItems.map((item, index) => (
          <div key={index} className="train-card">
            <div className="train-results">
              <div className="train-info">
                <div className="train-details">
                  <div className="train-name">{item.train_base.train_name}</div>
                  <div className="train-number">
                    #{item.train_base.train_no}{" "}
                  </div>
                </div>

                <div className="train-right-info">
                  <div className="departure-from">
                    <div className="departure-time">
                      {" "}
                      {item.train_base.from_time}{" "}
                    </div>
                    <div className="station-from">
                      {item.train_base.from_stn_name} (
                      {item.train_base.from_stn_code})
                    </div>
                  </div>
                  <div className="view-routes">
                    <div className="view-route-space">-- view source --</div>
                    <div className="travel-duration">
                      {item.train_base.travel_time} mins
                    </div>
                  </div>
                  <div className="departure-to">
                    <div className="arrival-time">
                      {item.train_base.to_time}
                    </div>
                    <div className="station-to">
                      {item.train_base.to_stn_name}(
                      {item.train_base.to_stn_code})
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Pagination */}
      <ul className="pagination">
        {trainDetails.length > itemsPerPage && (
          <div>
            {Array.from({
              length: Math.ceil(trainDetails.length / itemsPerPage),
            }).map((_, index) => (
              <li key={index} className="page-item">
                <button
                  onClick={() => paginate(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Train;



























/*

import React, { useState } from 'react';
import './Train.css';
import axios from 'axios';

const Train = () => {
    const [from, setFrom] = useState('');
    const [date, setDate] = useState('');
    const [to, setTo] = useState('');
    const [trainDetails, setTrainDetails] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); // Adjust this value as per your requirement

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/v/getTrainOnDate', { from, to, date });
            const data = response.data.data;
            setTrainDetails(data);
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // Logic to paginate the data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = trainDetails.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className='train'>
            <form className='search-box' onSubmit={handleSearch}>
                <div className="search-input">
                    <div className="search-input-box">
                        <label htmlFor='from' className='from'>
                            <span className='text-from'> From:</span>
                            <input type='text' name='from' id='from' placeholder='City or Station'
                                value={from} onChange={(e) => setFrom(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="search-input-box">
                        <label htmlFor='to' className='to'>
                            <span className='text-from'> To:</span>
                            <input type='text' name='to' id='to' placeholder='City or Station'
                                value={to} onChange={(e) => setTo(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="search-input-box">
                        <label htmlFor='date' className='date'>
                            <span className='text-from'> Date:</span>
                            <input type='date' name='date' id='date' placeholder='Date'
                                value={date} onChange={(e) => setDate(e.target.value)}
                            />
                        </label>
                    </div>
                </div>
                <button type='submit' className='search-btn btn'>Search</button>
            </form> 

            // Display the current page items 
            <div className="train-container">
                {currentItems.map((item, index) => (
                    <div key={index} className="train-card">

                        <div className="train-results">
                            <div className="train-info">
                                <div className="train-details">
                                    <div className="train-name">{item.train_base.train_name}</div>
                                    <div className="train-number">#{item.train_base.train_no} </div>
                                </div>


                                <div className="train-right-info">
                                    <div className="departure-from">
                                        <div className='departure-time'> {item.train_base.from_time} </div>
                                        <div className='station-from'>{item.train_base.from_stn_name} ({item.train_base.from_stn_code})</div>
                                    </div>
                                    <div className="view-routes">
                                        <div className="view-route-space">-- view source --</div>
                                        <div className="travel-duration">{item.train_base.travel_time} mins</div>
                                    </div>
                                    <div className="departure-to">
                                        <div className="arrival-time">{item.train_base.to_time}</div>
                                        <div className="station-to">{item.train_base.to_stn_name}({item.train_base.to_stn_code})</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

           // Pagination 

            <div className="train-pagination-section">
                <ul className="train-pagination">
                    {trainDetails.length > itemsPerPage && (
                        <div>
                            {Array.from({ length: Math.ceil(trainDetails.length / itemsPerPage) }).map((_, index) => (
                                <li key={index} className="train-page-item">
                                    <button onClick={() => paginate(index + 1)} className="page-link">
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </div>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Train;


*/
