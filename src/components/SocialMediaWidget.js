import { React } from "react";
import "../core/styles/SocialMediaWidget.css";

export const SocialMediaWidget = () => {
    return (
        <div className="social-media-widget-container">
            <a href='https://www.linkedin.com/in/shamin-ali/' target="/">
                <i className="fa fa-brands fa-linkedin" style={{ "color": "grey" }}></i>
            </a>
            <a href='/'>
                <i className="fa fa-brands fa-twitter" style={{ "color": "grey" }}></i>
            </a>
            <a href='/'>
                <i className="fa fa-brands fa-facebook" style={{ "color": "grey" }}></i>
            </a>
        </div>
    )
}
