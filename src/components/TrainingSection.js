import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import trainingDetails from "../assets/TrainingDetails.json";
import "../core/styles/ServiceOffering.css";

function TrainingSection() {
    return (
        <>
            <section className="service-offerings-container">
                <div>
                    <section className="service-offerings-nav-container">
                        <div className="service-offerings-nav-box">
                            {trainingDetails.map((e) => (
                                <div className="d-flex flex-row">
                                    <i class={e.offeringIcon}></i>
                                    <Link to={"/training/"+e['offerTitle']}>
                                        {e['offerTitle']}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </section>
                    <section className="service-offering-content-container">
                        <Outlet />
                    </section>
                </div>
            </section>
        </>
    );
}

export default TrainingSection;