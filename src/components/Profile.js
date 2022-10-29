import React from 'react';
import "../core/styles/Profile.css";

export const Profile =()=> {
    return (
        <section className="profile-container">
            <section className="profile-title-section">
                <p>Goal</p> 
            </section>
            <blockquote className='headline-section'>
                <p>Beginners Hub aims to support freshers
                    transitioning from various background to the world of Internet and Computers
                    and help them build their portfolio to enter in the IT world.
                </p>
            </blockquote>
            <section className="profile-section">
                <div className="profile-logo">
                    <img src="/images/my-profile.jpg"></img>
                    <div className="profile-logo-description">
                        <h3>Shamin Ali</h3>
                        <p>Full Stack Developer</p>
                        <p>Instructor @Beginners Hub</p>
                        <p>AWS Certified Developer</p>
                    </div>
                </div>
                <div className="profile-description">
                    <p>
                        I am a Full Stack Developer based out of Bangalore, 
                        currently working for an AI/ML firm. I am experienced in end to end Software Development from writing frontend, 
                        backend using various tools and technologies.
                        I obtained my bachelors in Electronics and Telecommunication engineering.
                        I gained most of my fundamental knowledge during my engineering phase which played a very important role in bringing me up to face different technical challenges that arises during Software Development. 
                        I hereby decided to  transfer some of  my knowledge to the young aspiring Software Engineers though this platform. I hope that my content will meet the requirements of the beginners and help them proceed in their career. Welcome to my website :)    
                    </p>
                </div>
            </section>
        </section>
    );
}
