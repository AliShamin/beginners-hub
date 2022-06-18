import React from "react";
import "./ContactInfo.css";

function ContactInfo() {
    return (
        <>
            <section className="contact-container">
                <div className="contact-box">
                    <h1>Contact Us</h1>
                    <div className="contact-details-box">
                        {/* <div className="contact-item-container">
                            <b>ADDRESS</b>
                            <address>
                                Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br />
                                Visit us at:<br />
                                Example.com<br />
                                Box 564, Disneyland<br />
                                USA
                            </address>
                        </div> */}
                        <div className="contact-item-container">
                            <b>Call/Whatsapp</b>
                            <span>
                                9981872935
                            </span>
                        </div>
                        <div className="contact-item-container">
                            <b>Email</b>
                            <span>
                                shaminali14@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}

export default ContactInfo;