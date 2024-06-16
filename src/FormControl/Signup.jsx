import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    mobileno: "",
    avatar: null, // new state for avatar
  });

  const handleChange = (e) => {
    if (e.target.name === 'avatar') {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('fullname', formData.fullname);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('mobileno', formData.mobileno);
    formDataToSend.append('avatar', formData.avatar);

    const response = await fetch(`/api/v/signup`,
      {
        method: 'POST',
        body: formDataToSend
      });

    if (!response.ok) {
      throw new Error(`Network response was not ok ${"status" + response.status}`);
    }

    const data = await response.json();
    console.log(data);

    if (data) {
      navigate('/login');
    }
  };

  return (
    <div className="main-signup">
      <div className="signup_">
        <div className="signup_cart">
          <form className="form_" onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <div className="form_info">
              <label htmlFor="fullname">Full Name :</label>
              <br></br>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter full Name"
                required
              />
            </div>
            <div className="form_info">
              <label htmlFor="mobileno">Mobile No :</label>
              <br></br>
              <input
                type="text"
                id="mobileno"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleChange}
                placeholder="Enter Mobile No.."
                required
              />
            </div>
            <div className="form_info">
              <label htmlFor="email">Email :</label>
              <br></br>
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email.."
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form_info">
              <label htmlFor="password">Password : </label>
              <br></br>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Choose password"
                required
              />
            </div>
            <div className="form_info">
              <label htmlFor="avatar">Avatar : </label>
              <br></br>
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
            <div className="button-signup">
              <button type="submit" id="btn_signup">
                Signup
              </button>
            </div>
          </form>
          <div className="signBack">
            <p>Welcome , Please Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
















// import React, { useState } from "react";
// import "./Signup.css";
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     fullname: "",
//     email: "",
//     password: "",
//     mobileno: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const response = await fetch(`/api/v/signup`,
//       {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });

//     if (!response.ok) {
//       throw new Error(`Network response was not ok ${"status" + response.status}`);
//     }

//     const data = await response.json();
//     console.log(data);

//     if (data) {
//       navigate('/login');
//     }

//   };

//   return (
//     <div className="main-signup">
//       <div className="signup_">
//         <div className="signup_cart">
//           <form className="form_" onSubmit={handleSubmit}>
//             <h1>Signup</h1>
//             <div className="form_info">
//               <label htmlFor="fullname">Full Name :</label>
//               <br></br>
//               <input
//                 type="text"
//                 id="fullname"
//                 name="fullname"
//                 value={formData.fullname}
//                 onChange={handleChange}
//                 placeholder="Enter full Name"
//                 required
//               />
//             </div>
//             <div className="form_info">
//               <label htmlFor="mobileno">Mobile No :</label>
//               <br></br>
//               <input
//                 type="text"
//                 id="mobileno"
//                 name="mobileno"
//                 value={formData.mobileno}
//                 onChange={handleChange}
//                 placeholder="Enter Mobile No.."
//                 required
//               />
//             </div>
//             <div className="form_info">
//               <label htmlFor="email">Email :</label>
//               <br></br>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="Enter Your Email.."
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form_info">
//               <label htmlFor="password">Password : </label>
//               <br></br>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Choose password"
//                 required
//               />
//             </div>
//             <div className="button-signup">
//               <button type="submit" id="btn_signup">
//                 Signup
//               </button>
//             </div>
//           </form>
//           <div className="signBack">
//             <p>Welcome , PLease Register</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
