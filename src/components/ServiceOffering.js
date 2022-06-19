import React from "react";
import serviceOfferings from "../assets/ServiceOfferings.json";
import "./ServiceOffering.css";

function ServiceOfferings() {
    return (
        <>
            <section className="service-offerings-container">
                <section>
                    <div>
                        <h1>WHAT WE OFFER ?</h1>
                        {serviceOfferings.map((e) => (
                            <div className="offering-description-box">
                                <h2>{e['offerTitle']}</h2>
                                <p>{e['offerDescription']}</p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h1>OUR ONLINE SCHEDULE</h1>
                        <div>
                            <h3>Book our free Online Classes here</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default ServiceOfferings;