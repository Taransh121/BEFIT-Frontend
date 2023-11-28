import React from 'react';
import { Navbar } from '../Components/Navbar/Navbar';
import { Footer } from '../Components/Footer/Footer';
import backgroundImage from "../images/bg8.jpg";
import { About } from './About';
import { Trainers } from './Trainers/Trainers';
import { Pricing } from './Pricing';
import { Features } from './Features';

export const Homepage = () => {

    const styles = {
        background: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        opacity: '1',
        color: "white",
        fontWeight: "500",
        fontSize: "20px",
        padding: "19% 5%",
    };
    return (
        <>
            <Navbar />
            <div style={styles} id='home'  >
                <h1 className='text-center mb-5'>Make Yourself Stronger <br /> Than Your Excuses.</h1>
                <div className='text-center text-dark'>
                    <button className='btn btn-outline-light '> <strong>Visit us to know more</strong> </button>
                </div>
            </div>
            <About />
            <Features />
            <Trainers />
            <Pricing />
            <Footer />
        </>
    )
}
