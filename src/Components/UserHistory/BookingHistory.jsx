import React, { useState, useEffect } from 'react';
import './BookingHistory.css';
import axios from 'axios';

const BookingHistory = () => {
    const [bookingHistory, setBookingHistory] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookingHistory = async () => {
            try {
                const response = await axios.get('/api/v/history');
                setBookingHistory(response.data.data); // Assuming the booking history data is in response.data.data
                console.log(response.data.data)
            } catch (error) {
                console.error('Error fetching booking history:', error);
                setError('Error fetching booking history');
            }
        };

        fetchBookingHistory();
    }, []);

    return (
        <div className='history-container'>
            <div className="booking-history">
                <h1 className='history-heading'>Booking History</h1>
                {error ? (
                    <p>{error}</p>
                ) : (
                    <ul className='history-list'>
                        {bookingHistory.map((booking, index) => (
                            <li key={index}>

                                <div className="history-details">

                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Facility Name </th>
                                                <th>Full Name </th>
                                                <th>Price </th>
                                                <th> From </th>
                                                <th>To </th>
                                                <th>Status </th>
                                                <th>Transaction Id </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>{booking.hotel_name}</td>
                                                <td>{booking.fullName}</td>
                                                <td>{booking.price}</td>
                                                <td>{booking.checkInDate}</td>
                                                <td>{booking.checkOutDate}</td>
                                                <td>{booking.paymentStatus}</td>
                                                <td>{booking.paymentId}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default BookingHistory;
