import React, { useState, useEffect } from 'react';

const TrainCard = ({ train, date, fetchSeatAvailability }) => {
    const [seatAvailability, setSeatAvailability] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (train) {
                const availability = await fetchSeatAvailability(train.train_number, date);
                setSeatAvailability(availability);
            }
        };
        fetchData();
    }, [train, date, fetchSeatAvailability]);

    if (!train) {
        return null; // Render nothing if train is undefined
    }

    return (
        <li>
            <div className='train-results'>
                <div className="train-info">
                    <div className="train-details">
                        <div className='train-name'>{train.train_name}</div>
                        <div className='train-number'>#{train.train_number} | {train.run_days ? train.run_days.map((day) => (
                            <span key={day}>{day + " "}</span>
                        )) : null}</div>
                    </div>
                    <div className="train-right-info">
                        <div className="departure-from">
                            <div className='departure-time'> {train.from_std} </div>
                            <div className='station-from'>{train.from_station_name}</div>
                        </div>
                        <div className="view-routes">
                            <div className="view-route-space">-- {train.distance} km --</div>
                            <div className="travel-duration">{train.duration} mins</div>
                        </div>
                        <div className="departure-to">
                            <div className="arrival-time">{train.to_std}</div>
                            <div className="station-to">{train.to_station_name}</div>
                        </div>
                    </div>
                </div>
                <div className='class-quota'>
                    {train.class_type.map((cl, idx) => (
                        <div className='single-class-quota' key={idx}>
                            {cl + " "}
                            <ul>
                                {seatAvailability.map((availability, idx) => (
                                    <li key={idx}>
                                        <p>Fare: {availability.total_fare}</p>
                                        <p>Availability: {availability.current_status}</p>
                                        <p>Probability: {availability.confirm_probability}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
};

export default TrainCard;
