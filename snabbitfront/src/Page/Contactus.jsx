import Accordionfaq from "../components/Accordionfaq";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Contactus.css";
import React from 'react';

function Contactus()
{
    return(
        <>
            <section className="contactus row">
                <div className="contactus-container col-6">
                    <h1 className="contactus-title">Contact Us</h1>
                    <form className="contactus-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form_title">Name</label>
                            <input type="text" id="name" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form_email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form_message">Message</label>
                            <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="contactus-submit">Submit</button>
                    </form>
                </div>
                <div className="contactus-faq col-6 d-flex align-items-center justify-content-center me-5">
                    <Accordionfaq/>
                </div>
            </section>
        </>
    )
}
export default Contactus;