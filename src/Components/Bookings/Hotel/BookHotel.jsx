import React, { useState } from "react";
import "./BookHotel.css";
import image1 from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.webp";
import image4 from "./beds.png";
import image5 from "./wifi.png";
import image6 from "./treadmill.png";
import image7 from "./cutlery.png";
import { useParams, useNavigate } from "react-router-dom";
import Product from "./../../Card/ProductApi";



const BookHotel = () => {
  const [fullName, setFullName] = useState("");
  const [numberOfRooms, setNumberOfRooms] = useState(1);
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [errors, setErrors] = useState({});
  const [mainImage, setMainImage] = useState(image1);

  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = Product.find((hotel) => hotel.hotel_id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const {
    photo1, photo2, photo3, photo4, photo5, hotel_name, overview, Price, city
  } = hotel;

  const handleRoomChange = (e) => {
    setNumberOfRooms(e.target.value);
  };
  const handleInputChange = (e) => {
    setFullName(e.target.value);
  };

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, checkIn: "" }));
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, checkOut: "" }));
  };

  const calculateTotalPrice = () => {
    const pricePerRoom = Price;
    const numberOfNights = getNumberOfNights();
    if (numberOfNights > 0) {
      return numberOfRooms * pricePerRoom * numberOfNights;
    } else {
      return 0;
    }
  };

  const getNumberOfNights = () => {
    if (!checkInDate || !checkOutDate) return 0;
    const checkIn = new Date(checkInDate);
    const checkOut = new Date(checkOutDate);
    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (numberOfRooms <= 0) {
      newErrors.rooms = "Number of rooms must be greater than 0";
    }
    if (!checkInDate) {
      newErrors.checkIn = "Please select check-in date";
    }
    if (!checkOutDate) {
      newErrors.checkOut = "Please select check-out date";
    }
    setErrors(newErrors);


    if (!localStorage.getItem('authToken')) {
      navigate('/login')
    }
    else {

      if (Object.keys(newErrors).length === 0) {
        console.log("Booking submitted");


        const response = await fetch(`/api/v/order`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            hotel_id: id,
            hotel_name,
            fullName,
            numberOfRooms,
            checkInDate,
            checkOutDate,
            price: calculateTotalPrice() // assuming Price is the room price
          })
        });

        const { razorpayOrder } = await response.json();
        handlePayment(razorpayOrder);
      }
    };
  }

  const handlePayment = async (razorpayOrder) => {

    try {
      const options = {
        key: 'rzp_test_3DHCjFdyIFj9LB', // Replace with your actual public key
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
        name: hotel_name,
        description: 'Payment for Hotel Booking',
        order_id: razorpayOrder.id,

        handler: function (response) {
          verifyPayment(response);
        },

        prefill: {
          name: fullName,
          email: 'Sachin@example.com',
          contact: '8434275032',
        },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();

    } catch (error) {
      console.error(error);
    }
  };

  const verifyPayment = async (response) => {

    try {
      const verifyResponse = await fetch(`/api/v/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          payment_id: response.razorpay_payment_id,
          order_id: response.razorpay_order_id
        })
      });

      const verifyResult = await verifyResponse.json();
      if (verifyResult.success) {
        alert('Payment verified successfully');
        navigate('/');
      }
      else {
        alert('Payment failed');
      }

    } catch (error) {
      console.error(error);
    }
  };


  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="booking-container">
      <div className="booking-cart">
        <div className="booking-main-cart">
          <div className="hotel-images">
            <h1 className="heading_hotel">{hotel_name}</h1>

            <img src={photo1} alt="Hotel" className="main_image" />
            <div className="image-thumbnails">
              <img
                src={photo2}
                alt="Thumbnail 1"
                onClick={() => handleThumbnailClick(image1)}
              />
              <img
                src={photo3}
                alt="Thumbnail 2"
                onClick={() => handleThumbnailClick(image2)}
              />
              <img
                src={photo4}
                alt="Thumbnail 3"
                onClick={() => handleThumbnailClick(image3)}
              />
              <img
                src={photo5}
                alt="Thumbnail 4"
                onClick={() => handleThumbnailClick(image4)}
              />
            </div>
          </div>

          <div className="border"></div>
          <form onSubmit={handleSubmit}>
            <h1 className="heading">Book Your Stay</h1>
            <div className="form-group">
              <label htmlFor="name">Full Name: </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your name "
                id="name"
                required
                value={fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="rooms">Number of Rooms:</label>
              <input
                name="numberOfRooms"
                type="number"
                id="rooms"
                value={numberOfRooms}
                onChange={handleRoomChange}
              />
              {errors.rooms && <span className="error">{errors.rooms}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="checkin">Check-in Date:</label>
              <input
                type="date"
                name="checkInDate"
                id="checkin"
                value={checkInDate}
                onChange={handleCheckInDateChange}
              />
              {errors.checkIn && (
                <span className="error">{errors.checkIn}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="checkout">Check-out Date:</label>
              <input
                name="checkInDate"
                type="date"
                id="checkout"
                value={checkOutDate}
                onChange={handleCheckOutDateChange}
              />
              {errors.checkOut && (
                <span className="error">{errors.checkOut}</span>
              )}
            </div>
            <div className="form-group">
              <h3 name='price'>Total Price: ${calculateTotalPrice({ Price })}</h3>
            </div>
            <button className="btn-book" type="submit">
              Confirm Booking
            </button>
          </form>

        </div>
      </div>
      <div className="amenities_info_container">
        <div className="amenities_info_card">
          <div className="amenities_info">
            <div className="room_facilities">
              <h1>Ameneties & Info</h1>
            </div>
            <div className="hotel_facilities">
              <div className="hf">
                <img src={image4} alt="image4"></img> <h1>Room Services </h1>
              </div>
              <div className="hf">
                <img src={image5} alt="image5"></img> <h1>free wifi</h1>
              </div>
              <div className="hf">
                <img src={image6} alt="image6"></img> <h1>Gym </h1>
              </div>
              <div className="hf">
                <img src={image7} alt="image7"></img> <h1>Restaurant</h1>
              </div>
            </div>
            <div className="hotel_info">
              <h1>General</h1>
              <p>
                Train station pickup surcharge done Comprehensive recycling
                policy
              </p>
              <p>
                done Bulk dispenser for toiletries done
                Biodegradable/compostable
              </p>
              <p>
                stirrers doneNo single-use plastic straws done No single-use
              </p>
              <p> plastic stirrers doneReusable cups only</p>

              <p>
                doneBiodegradable/compostable straws doneLimo or town car
                service available
              </p>
            </div>
            <div className="about_hotel">
              <h1>{hotel_name}</h1>
              <p>{overview}</p>
              <div className="about_hotel_img">
                <img src={photo1} alt="image"></img>
                <img src={photo3} alt="image"></img>
                <img src={photo4} alt="image"></img>
                <img src={photo5} alt="image"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookHotel;
