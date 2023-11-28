import React from 'react';
import aboutImg from "../images/about-img.jpg";


export const About = () => {
    return (
        <div id="about" className='d-flex gap-0 md:mt-5 mt-3 row m-1'>
            <div className='col-4'>
                <img src={aboutImg} className='d-none d-sm-block' alt="about" width="100%" />
            </div>
            <div className='font-weight-bold p-5 col-12 col-md-8' style={{ fontSize: "14px" }}>
                <h3 className='text-danger'>Be Strong, Be Fit</h3>
                <h2 >Make Yourself Stronger <br /> Than Your Excuses. </h2> <br />
                <p>At our gym, we believe in pushing boundaries and achieving greatness. Join our supportive community, and together, we'll conquer your fitness goals and strive for a healthier, stronger you.</p>
                <div>
                    <div className='d-flex gap-0 gap-md-5 mt-5 row'>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Body and Mind</strong></h5>
                            <p>Balancing the connection between body and mind is the key to unlocking a harmonious and thriving existence</p>
                        </div>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Healthy Life</strong></h5>
                            <p>A healthy life is the foundation for happiness and fulfillment in every aspect of our journey</p>
                        </div>
                    </div>
                    <div className='d-flex gap-0 gap-md-5 mt-4 row '>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Strategies</strong></h5>
                            <p>Effective strategies are the compass that guides us toward success and empowers us to overcome challenges along the way.</p>
                        </div>
                        <div className='col-6 col-md-5'>
                            <h5><strong>Workouts</strong></h5>
                            <p>Workouts are the catalysts that propel us closer to our fitness goals, empowering us to unleash our full potential.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
