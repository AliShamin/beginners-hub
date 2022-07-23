import React from "react";
import "../core/styles/WhatIOffer.css";

function WhatIOffer() {
    return (
        <>
            <section className="whatioffer-wrap">
                <div className="whatioffer-title-wrap">
                    <h2>What I Offer</h2>
                    <p className="simple-title">What you might get from me</p>
                </div>
                <div className="whatioffer-box">
                    <div className="whatioffer-cards-item">
                        <div className="whatioffer-card-title">
                            <img src="/logo/master-class-logo.png" width='80' height='80' />
                            <h4>Master Classes</h4>
                        </div>
                        <div>
                            <p>Masterclasses are designed to give the tutorial lessons on the various topics comes under Software Development.</p>
                        </div>
                    </div>
                    <div className="whatioffer-cards-item">
                        <div className="whatioffer-card-title">
                            <img src="/logo/master-class-logo.png" width='80' height='80' />
                            <h4>Training Sessions</h4>
                        </div>
                        <div>
                            <p>Training sessions are basically designed to give pratical handson on various tools and technologies that comes under Software Development.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>);
}

export default WhatIOffer;
