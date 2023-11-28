import React from 'react'
import { Link } from 'react-router-dom'
import f1 from "../images/f1.jpg"
import f2 from "../images/f2.jpg"
import f3 from "../images/f3.jpg"

export const Features = () => {
    return (
        <>
            <section className="features text-white mb-5 p-5 pt-3" style={{ backgroundColor: "black" }} id="features">
                <h2 className="heading text-center text-danger mb-4" > <span>Gym Features</span> </h2>
                <div className="box-container row text-center" style={{ marginRight: 0 }}>
                    <div className="box col-md-4">
                        <div className="content">
                            <img src={f1} alt="" />
                            <h3>Body building</h3>
                            <p>Build muscle, define your form, and sculpt a powerful physique with our bodybuilding expertise.</p>
                            <Link to="#" className="btn btn-outline-danger">Read more</Link>
                        </div>
                    </div>

                    <div className="box second col-md-4">
                        <div className="content">
                            <img src={f2} alt="" />
                            <h3>Gym For Men</h3>
                            <p>Transform your body, conquer your goals, and elevate your fitness at our exclusive men's gym.</p>
                            <Link to="#" className="btn btn-outline-danger">Read more</Link>
                        </div>
                    </div>

                    <div className="box col-md-4">
                        <div className="content">
                            <img src={f3} alt="" />
                            <h3>Gym For Women</h3>
                            <p>Unlock your full potentialand,feel confident thrive in a supportive community at our women's fitness center.</p>
                            <Link to="#" className="btn btn-outline-danger">Read more</Link>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}
