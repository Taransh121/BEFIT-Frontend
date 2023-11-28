import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    const [subscribe, setSubscribe] = useState('');

    const handleSubscribeChange = (e) => {
        setSubscribe(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log();
        try {
            await axios.post('http://localhost:8080/sub/subscribe', { subscribe });
            alert("Subscribed Successfully!!")
            setSubscribe("");
            // console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <section className="footer mt-5 p-5 text-dark" style={{ backgroundColor: "#d8d7d7" }}>

                <div className="box container row flex">

                    <div className="box col-md-3 col-12 mt-3 md:mt-0">
                        <h3 style={{ color: "black" }}>Quick Links</h3>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="box col-md-3 col-12 mt-3 md:mt-0">
                        <h3 style={{ color: "black" }}>Opening Hours</h3>
                        <p> Monday : <i className='text-danger'> 6:00am - 10:00pm </i> </p>
                        <p> Tuesday : <i className='text-danger'> 7:00am - 10:30pm </i> </p>
                        <p> Wednesday : <i className='text-danger'> 6:00am - 10:00pm </i> </p>
                        <p> Thursday : <i className='text-danger'> 7:00am - 10:30pm </i> </p>
                        <p> Friday : <i className='text-danger'> 6:00am - 10:00pm </i> </p>
                        <p> Saturday : <i className='text-danger'> 7:00am - 10:30pm </i> </p>
                        <p> Sunday : <i className='text-danger'> Closed </i> </p>
                    </div>

                    <div className="box col-md-3 col-12 mt-3 md:mt-0">
                        <h3 style={{ color: "black" }}>Contact Us</h3>
                        <p> <i className="fas fa-phone"></i> +919118859567 </p>
                        <p> <i className="fas fa-phone"></i> +918707815036 </p>
                        <p> <i className="fas fa-envelope"></i> taranshchellani121@gmail.com </p>
                        <p> <i className="fas fa-map"></i> Kanpur, india - 208006 </p>
                        <div className="share ">
                            <Link to="https://www.instagram.com/" target='_blank' className="text-decoration-none mr-2 fab fs-3 text-danger fa-instagram"></Link>
                            <Link to="https://github.com/" target='_blank' className="text-decoration-none m-3 fab fs-3 text-danger fa-github"></Link>
                            <Link to="https://www.linkedin.com/feed/" target='_blank' className="text-decoration-none m-2 fs-3 fab text-danger fa-linkedin"></Link>
                            <Link to="https://in.pinterest.com/" target='_blank' className="text-decoration-none m-2 fs-3 fab text-danger fa-pinterest"></Link>
                        </div>
                    </div>

                    <div className="box col-md-3 col-12 mt-3 md:mt-0">
                        <h3 style={{ color: "black" }}>Newsletter</h3>
                        <p>Subscribe for latest updates</p>
                        <form action="">
                            <input type="email" name="subscribe" value={subscribe} onChange={handleSubscribeChange} className="email p-1 rounded-2" placeholder="Enter your email" id="subscribe" />
                            <button onClick={handleSubmit} className="btn btn-outline-danger rounded-3 m-0 mt-md-0 mt-2 fs-6" style={{ marginLeft: "10px" }}>Subscribe </button>
                        </form>
                    </div>
                </div>

            </section>

            <div className="credit bg-danger text-light text-center p-1"> Created by <span>Mr. Taransh Chellani</span> | All rights reserved! </div>
        </>
    )
}
