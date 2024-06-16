import React, { useState, useEffect } from 'react';
import './ProfilePage.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const [userProfile, setUserProfile] = useState(null);
    const [error, setError] = useState(null);
    const [newAvatar, setNewAvatar] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [editUserData, setEditUserData] = useState({ fullname: "", mobileno: "" })
    const navigate = useNavigate();


    const handleUserUpdate = (e) => {
        const { name, value } = e.target;
        setEditUserData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };




    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get('/api/v/user/profile');
                setUserProfile(response.data.data);
            } catch (error) {
                console.error('Error fetching user profile:', error);
                setError('Error fetching user profile');
            }
        };

        fetchUserProfile();
    }, []);

    const handleAvatarChange = (e) => {
        setNewAvatar(e.target.files[0]);
    };

    const handleAvatarUpload = async () => {
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append('avatar', newAvatar);

            const response = await axios.post('/api/v/user/update-avatar', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setUserProfile(response.data.data);
        } catch (error) {
            console.error('Error uploading avatar:', error);
            setError('Error uploading avatar');
        } finally {
            setUploading(false);
        }
    };


    const UpdateUserDetails = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch(`/api/v/user/profile-update`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(editUserData)
                });


            if (!response.ok) {
                throw new Error(`Network response was not ok ${"status" + response.status}`);
            }

            const data = await response.json();
            console.log(data)

            if (data.success) {
                alert('Successfully updated');
                Window.location.reload()
            }



        } catch (error) {

            console.log("Error while updating user details")

        }
    }


    useEffect(() => {
        UpdateUserDetails();

    }, [])


    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
      };




    return (

        <div className='profile-page-container'>
            


            <div className="profile-page-division">



                {error ? (
                    <p>{error}</p>
                ) : (
                    userProfile && (
                        <div className='profile-page-section'>

                            <div className="profile-left-section">
                                <aside id="profile-sidebar">
                                    <Link to="/" className="profile-logo">
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
                                        <li>
                                            <button className="profile-logout-btn" onClick={handleLogout} type="submit">
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </aside>


                            </div>




                            <div className='profile-right-section'>

                                <div className="profile-content">

                                    <div className="profile-images-data">
                                        <img src={userProfile.avatar} alt="User Avatar" className='avatar-img' />
                                        <div className="avatar-img-input">

                                            <input type="file" onChange={handleAvatarChange} />
                                            <button
                                                className='avatar-img-btn'
                                                onClick={handleAvatarUpload}
                                                disabled={uploading}
                                            >
                                                Upload Avatar
                                            </button>
                                        </div>
                                        {uploading && <p>Uploading...</p>}
                                    </div>

                                    <div className="profile-details">
                                        <p><strong>Name:</strong> {userProfile.fullname}</p>
                                        <p><strong>Email:</strong> {userProfile.email}</p>
                                        <p><strong>Mobile Number:</strong> {userProfile.mobileno}</p>
                                    </div>
                                </div>


                                <div className="update-profile-details">
                                    <div className="update-account">
                                        <h3 className='edit-profile-heading'>Update Account Details</h3>
                                        <form className='update-profile-form' onSubmit={UpdateUserDetails}>

                                            <label htmlFor='fullname'>FullName:
                                                <input type='text' name='fullname'
                                                    id='fullname'
                                                    placeholder='Enter Full Name'
                                                    value={editUserData.fullname}
                                                    onChange={handleUserUpdate}
                                                />
                                            </label>

                                            <label htmlFor='fullname'>MobileNo:
                                                <input type='number' name='mobileno'
                                                    id='mobileno' placeholder='Enter Mobile Number'
                                                    value={editUserData.mobileno}
                                                    onChange={handleUserUpdate}

                                                />
                                            </label>


                                            <button type='submit'
                                                className='update-profile-btn'
                                            >Update</button>




                                        </form>
                                    </div>

                                </div>


                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
