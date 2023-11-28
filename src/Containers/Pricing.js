import React from 'react';
import { Link } from "react-router-dom";


export const Pricing = () => {
    return (
        <div>
            <section className="pricing text-white mt-3 p-5 row" id="pricing" style={{ backgroundColor: "black", marginRight: "0" }}>

                <div className="information col-md-5 mb-5 md:mb-0">
                    <h4 className='text-danger'>Pricing Plan</h4>
                    <h3>Affordable pricing plan for you</h3>
                    <p>Join our gym today and take advantage of our affordable membership prices, making fitness accessible to everyone!</p>
                    <p> <i className="fas fa-check text-danger"></i> Cardio exercise </p>
                    <p> <i className="fas fa-check text-danger"></i> Weight lifting </p>
                    <p> <i className="fas fa-check text-danger"></i> Diet plans </p>
                    <p> <i className="fas fa-check text-danger"></i> Overall results </p>
                    <Link to="#" className="btn btn-outline-danger">All pricing</Link>
                </div>

                <div className="plan basic col-md-3 text-center p-5 mb-5 md:mb-0 rounded-5" style={{ backgroundColor: "#111111" }} >
                    <h3>Basic Plan</h3>
                    <div className="price"><span>Rs</span> <strong className='text-danger fs-2'>2500</strong><span>/mo</span></div>
                    <div className="list">
                        {/* <!-- <p> <i className="fas fa-check text-danger"></i> personal training </p> --> */}
                        <p> <i className="fas fa-check text-danger"></i> Cardio exercise </p>
                        <p> <i className="fas fa-check text-danger"></i> Weight lifting </p>
                        {/* <!-- <p> <i className="fas fa-check text-danger"></i> diet plans </p> --> */}
                        <p> <i className="fas fa-check text-danger"></i> Overall results </p>
                    </div>
                    <Link to="#" className="btn btn-outline-danger">Get started</Link>
                </div>

                <div className="plan col-md-4 text-center">
                    <h3>Premium Plan</h3>
                    <div className="price"><span>Rs</span> <strong className='text-danger fs-2'>5000</strong> <span>/mo</span></div>
                    <div className="list">
                        <p> <i className="fas fa-check text-danger"></i> Personal training </p>
                        <p> <i className="fas fa-check text-danger"></i> Cardio exercise </p>
                        <p> <i className="fas fa-check text-danger"></i> Weight lifting </p>
                        <p> <i className="fas fa-check text-danger"></i> Diet plans </p>
                        <p> <i className="fas fa-check text-danger"></i> Overall results </p>
                    </div>
                    <Link to="/checkout" className="btn btn-outline-danger">Get started</Link>
                </div>

            </section>
        </div>
    )
}
