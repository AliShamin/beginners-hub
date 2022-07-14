import React from "react";
import "../core/styles/ContactInfo.css";

function ContactInfo() {
    return (
        <>
            <section className="contact-container">
                <div className="contact-box">
                    <section className="contact-query-post-container">
                        <h2>You can submit your queries here</h2>
                        <a href="" target="/">Submit</a>
                    </section>
                    <h2>Or</h2>
                    <h1>Contact Me</h1>
                    <div className="contact-details-box">
                        <div className="contact-item-container">
                            <span>
                                <i className="fa fa-solid fa-globe" style={{ fontSize: 20 }}></i>
                                Bangalore, India
                            </span>
                            <span>
                                <i className="fa fa-solid fa-phone" style={{ fontSize: 20 }}></i>
                                +919981872935</span>
                                <span>
                                <i className="fa fa-solid fa-envelope" style={{ fontSize: 20 }}></i>
                                shaminali14@gmail.com</span>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}

export default ContactInfo;