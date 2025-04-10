import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Aboutus.css";
import React from 'react';

function Aboutus() {
    return (
        <>
            <section className="aboutus">
                <div className="aboutus-container">
                    <h1 className="aboutus-title">About Us</h1>
                    <p className="aboutus-content">
                        Welcome to Snabbit! We are a team of passionate individuals dedicated to delivering innovative solutions.
                        Our mission is to create impactful products that make a difference in people's lives.
                        With a focus on quality and customer satisfaction, we strive to exceed expectations.
                    </p>
                    <p className="aboutus-content">
                        At Snabbit, we believe in the power of collaboration and innovation.
                        Join us on our journey as we continue to grow and make a positive impact in the world.
                    </p>
                </div>
                <div className="aboutus-location d-flex justify-content-center align-items-center mt-5 pt-5 row">
                    <div className="About-Professional justify-content-center align-items-center col-3">
                    <p className="fs-1 about_number">50,000+</p>
                    <p className="fs-4 about_title">Trained Professionals</p>
                    </div>
                    <div className="About-Customer justify-content-center align-items-center col-3">
                    <p className="fs-1 about_number">12 Million+</p>
                    <p className="fs-4 about_title">Happy Customers</p>
                    </div>
                    <div className="About-Professional justify-content-center align-items-center col-3">
                    <p className="fs-1 about_number">60</p>
                    <p className="fs-4 about_title">Cities</p>
                    </div>
                    <div className="About-Professional justify-content-center align-items-center col-3">
                    <p className="fs-1 about_number">4</p>
                    <p className="fs-4 about_title">Countries</p>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Aboutus;