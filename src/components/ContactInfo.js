import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
    return (
        <>
            <section className="contact-container">
                <div className="contact-box">
                    <h1>Contact Us</h1>
                    <div className="contact-details-box">
                        <div className="contact-item-container">
                            <i className="fa fa-solid fa-globe" style={{ fontSize: 40 }}></i>
                            <b>Location</b>
                            <span>Bangalore, India</span>
                        </div>
                        <div className="contact-item-container">
                            <i className="fa fa-solid fa-phone" style={{ fontSize: 40 }}></i>
                            <b>Call / Whatsapp</b>
                            <span>+919981872935</span>
                        </div>
                        <div className="contact-item-container">
                            <i className="fa fa-solid fa-envelope" style={{ fontSize: 40 }}></i>
                            <b>Email</b>
                            <span>shaminali14@gmail.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}

export default ContactInfo;