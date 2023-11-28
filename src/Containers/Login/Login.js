import React, { useState } from 'react';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
// import backgroundImage from "../../images/bg5.avif"
import backgroundImage from "../../images/bg8.jpg";



export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleemailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // try {
        const response = await axios.post('http://localhost:8080/user/login', { email, password, });
        localStorage.setItem("token", response.data.token);
        navigate("/home");
        // } catch (error) {
        //     alert("Invalid creds");
        // }
    };
    const styles = {
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center',
        height: '100vh',
        opacity: '1',
        color: "white",
        fontWeight: "500",
        fontSize: "25px",
        padding: "10%"
    };
    return (

        <>
            <Navbar />
            <div style={styles}>

                <h1 className='text-center mt-5'>  Welcome to <span className="text-danger">BE</span>FIT </h1> <br />

                <form onSubmit={handleSubmit} className='container'  >
                    <div className="row justify-content-center">
                        <div className="mb-4 col-md-7">
                            {/* <label htmlFor="email" className="form-label">Email address</label> */}
                            <input type="email" className="form-control" placeholder='Email Address' onChange={handleemailChange} required value={email} name='email' id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-4 col-md-7">
                            {/* <label htmlFor="password" className="form-label">Password</label> */}
                            <input type="password" className="form-control" placeholder='Password' onChange={handlePasswordChange} required value={password} name='password' id="password" />
                        </div> <br />
                        <div className='text-center'>
                            <button type="submit" className="btn btn-outline-light col-md-1" >Login</button> <br />
                            <Link style={{ fontSize: "16px", color: "white" }} to="/register">Dont have an Account ? Register here</Link>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
