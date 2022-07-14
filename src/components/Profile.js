import React from 'react';
import "../core/styles/Profile.css";

function Profile() {
    return (
        <section className="profile-container">
            <section className="profile-title-section">
                <p>Our Goal</p> 
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
                        <p>Full Stack Engineer</p>
                        <p>Instructor @Beginners Hub</p>
                        <p>BE, SGSITS Indore'19</p>
                    </div>
                </div>
                <div className="profile-description">
                    <p>I am a Software Developer with demonstrated history of working with frontend, backend and cloud domain. Skilled in Spring Boot, Angular, Node Js, React and various cloud technologies such as AWS and GCP.
                        Have good experience working with micro service based architectures.
                        Designed fault tolerant and resilient systems.
                        Hands-on experience in building CICD pipelines.
                        Experienced in working with agile frameworks such as scrum and kanban.
                        Holding Bachelor of Engineering (B.E.) degree focused in Electronics and Telecommunication Engineering from <b>SGSITS Indore</b>.
                    </p>
                    <section className="skills-section">
                        <span><b>Skills</b></span>
                        <div className="skills-container">
                            <span>Angular</span>
                            <span>React</span>
                            <span>AWS</span>
                            <span>Jenkins</span>
                            <span>Docker</span>
                            <span>Spring Boot</span>
                            <span>SQL</span>
                            <span>Node Js</span>
                            <span>Flask</span>
                        </div>
                    </section>
                </div>
            </section>

        </section>
    );
}

export default Profile;