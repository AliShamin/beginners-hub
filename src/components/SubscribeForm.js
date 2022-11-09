import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "../core/styles/SubscribeForm.css";

const url = "https://beginnershub.us18.list-manage.com/subscribe/post?u=55df9c801095f3d7a842ada85&amp;id=82f2bfe8ba&amp;f_id=004d14e7f0";

export const SubscribeForm = () => {
    return (
        <section className="subscribe-form-container">
            <div className='container'>
                <div className="subscribe-form-left-section">
                    <h1>Subscribe to BeginnersHub</h1>
                </div>
                <MailchimpSubscribe
                    url={url}
                    render={({ subscribe, status, message }) => (
                        <CustomForm
                            status={status}
                            message={message}
                            onValidated={formData => subscribe(formData)}
                        />
                    )}
                />
            </div>
        </section>
    );
}


const CustomForm = ({ status, message, onValidated }) => {
    let email, fName, lName;

    const submit = () => {
        if (email && fName && lName && email.value.indexOf("@") > -1)
            onValidated({
                FNAME: fName.value,
                LNAME: lName.value,
                EMAIL: email.value
            });
    };

    return (
        <div className="custom-form-container">
            <div className='d-flex d-flex-column'>
                <span>First Name *</span>
                <input ref={node => (fName = node)} type="text" />
            </div>
            <div className='d-flex d-flex-column'>
                <span>Last Name *</span>
                <input ref={node => (lName = node)} type="text" />
            </div>
            <div className='d-flex d-flex-column'>
                <span>Email *</span>
                <input ref={node => (email = node)} type="email" />
            </div>
            <button onClick={submit}> Subscribe </button>
            <div className="custom-form-response-container">
                {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
                {status === "success" && <div style={{ color: "green" }} dangerouslySetInnerHTML={{ __html: message }} />}
            </div>
        </div>
    );
};

