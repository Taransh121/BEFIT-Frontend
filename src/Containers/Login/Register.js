import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import axios from 'axios';
// import backgroundImage from "../../images/bg5.avif"
import backgroundImage from "../../images/bg8.jpg";


// import { DropzoneArea } from "react-dropzone";


export const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [profilePicture, setProfilePicture] = useState("");

    const navigate = useNavigate();

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    }; const handleCityChange = (e) => {
        setCity(e.target.value);
    }; const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.value);
    };
    const signupbtn = async (e) => {
        e.preventDefault();
        // try {
        const response = await axios.post('http://localhost:8080/user/register', { firstName, lastName, email, password, city, profilePicture, phone });
        localStorage.setItem("token", response.data.token);
        navigate("/home");

        // } catch (error) {
        //     alert("Error occurred while creating your account, sorry! You may have to restart your server.");
        // }
    }
    const styles = {
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // height: '100vh',
        opacity: '1',
        color: "white",
        fontWeight: "500",
        // fontSize: "20px",
        padding: "5.7%"
    };
    return (
        <>
            <Navbar />
            <div style={styles}>

                <h2 className='text-center mt-5' >Create an account to use <span className="text-danger">BE</span>FIT</h2>
                <form onSubmit={signupbtn} className='m-5' >
                    <div className="row mb-3">
                        <div className="mb-4 col-md-6 col-sm-12">
                            {/* <label htmlFor="firstName" className="form-label">Firstname</label> */}
                            <input type="text" className="form-control" placeholder='Firstname' onChange={handleFirstNameChange} value={firstName} required minLength={3} maxLength={20} name='firstName' id="firstName" aria-describedby="firstNameHelp" />
                        </div>
                        <div className="mb-4 col-md-6">
                            {/* <label htmlFor="lastName" className="form-label">Lastname</label> */}
                            <input type="text" className="form-control" placeholder='Lastname' onChange={handleLastNameChange} value={lastName} required minLength={3} maxLength={20} name='lastName' id="lastName" aria-describedby="lastNameHelp" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="mb-4 col-md-6">
                            {/* <label htmlFor="email" className="form-label">Email</label> */}
                            <input type="email" className="form-control" placeholder='Email' onChange={handleEmailChange} minLength={5} required value={email} name='email' id="email" />
                        </div>
                        <div className="mb-4 col-md-6">
                            {/* <label htmlFor="password" className="form-label">Password</label> */}
                            <input type="password" className="form-control" placeholder='Password' onChange={handlePasswordChange} minLength={5} required value={password} name='password' id="password" />
                        </div>
                    </div>
                    <div className="row mb-2">
                        <div className="mb-4 col-md-6">
                            {/* <label htmlFor="city" className="form-label">City</label> */}
                            <input type="text" className="form-control" placeholder='City' onChange={handleCityChange} minLength={5} required value={city} name='city' id="city" />
                        </div>
                        <div className="mb-4 col-md-6">
                            {/* <label htmlFor="phone" className="form-label">Phone</label> */}
                            <input type="text" className="form-control" placeholder='Phone number' onChange={handlePhoneChange} minLength={5} required value={phone} name='phone' id="phone" />
                        </div>
                    </div>
                    <div>
                        <div action="#" className="dropzone mt-4 border-dashed ">
                            Profile Picture:
                            <div className="fallback mt-2">
                                <input onChange={handleProfilePictureChange} value={profilePicture} name="file" type="file" multiple />
                            </div>
                        </div>
                    </div> <br />
                    <button type="submit" className="btn btn-outline-light mr-5 col-md-1 mb-2" >Signup</button> <br />
                    <Link style={{ fontSize: "14px", color: "white", fontWeight: "600" }} to="/login" className='mx-1'>Already have an Account ? Login Now</Link>
                </form >
            </div>

        </>
    )
}
