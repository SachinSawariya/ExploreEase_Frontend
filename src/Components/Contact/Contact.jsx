// ContactForm.js

import React, { useRef, useState } from 'react';
import './Contact.css';
import { FaLocationDot, FaPhoneVolume, FaMessage } from "react-icons/fa6";
import emailjs from  '@emailjs/browser';
import {useNavigate} from 'react-router-dom'



const Contact = () => {

  const form = useRef();
  const navigate = useNavigate();

  const [msgDone, setMsgDone] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gf9xyhs', 'template_zi8uefx', form.current, 'AAkbsx1oZzNvNsark')
      .then((result) => {
        console.log(result.text);
        setMsgDone(true);
        setShowPopup(true);

        setTimeout(() => {
          setShowPopup(false);
          resetForm();
        }, 50000);
        
      }, (error) => {
        console.log(error.text);
      }
    )
  };

  const resetForm = () => {
    form.current.reset();
  };
  const closePopup = () => {
    setShowPopup(false);
  };


  return (

    <div className="contact-page">

      <div className="contact-header-section">
        <div className="contact-header-content">
          <div className="contact-heading">
            <h1>Get In Touch with Us</h1>
          </div>

          <div className="contact-media">
            <div className='contact-media-type'>
              <div className='contact-media-icon'><FaLocationDot /></div>
              <h1>Address</h1>
              <h2>Chandigarh University</h2>
              <h2>Mohali, Punjab</h2>
            </div>
            <div className='contact-media-type'>
            <div className='contact-media-icon'><FaPhoneVolume /></div>
            <h1>Contact no.</h1>
            <h2>8434275032</h2>
            <h2>8840456278</h2>
            </div>
            <div className='contact-media-type'>
            <div className='contact-media-icon'><FaMessage /></div>
            <h1>Email:</h1>
            <h2>sachinsawariya12@gmail.com</h2>
            <h2>abhijeetsingha240@gmail.com</h2>
            </div>

          </div>

        </div>
      </div>




      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-page-form" ref={form} onSubmit={sendEmail}>
          <div className="contact-form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className='contact-button'>Submit</button>
        </form>
      </div>

      {/* Popup message component */}
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <p>Thanks For Contact Us..</p>
            <button className='okay-button' onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

    </div>














  );
};

export default Contact;
