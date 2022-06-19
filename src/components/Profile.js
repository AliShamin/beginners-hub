import React from 'react';
import "./Profile.css";

function Profile() {
    return (
        <section className="profile-container">
            <section className='headline-section'>
                <h1><span>W</span>e are the group of highly motivated people 
                    aiming to support beginners transitioning from various 
                    background to the world of Internet and Computers.
                </h1>
            </section>
            <section className="profile-section">
                <div className="profile-logo">
                    <img src="/images/my-profile.jpg"></img>
                    <div>
                        <h3>Software Developer</h3>
                        <p>BE in Electronics and Telecommunication</p>
                        <p>SGSITS Indore'19</p>
                    </div>
                </div>
                <div className="profile-description">
                    <p>Software Engineer with demonstrated history of working with frontend, backend and cloud domain. Skilled in Spring Boot, Angular, Node Js, React and various cloud technologies like AWS and GCP.
                        Have good experience working with micro service architectures.
                        Designed fault tolerant and resilient systems.
                        Hands-on experience in building CICD pipelines.
                        Experienced in working with agile frameworks like scrum and kanban.
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
                                <span>Spring Boot</span>
                        </div>
                    </section>
                </div>
            </section>

        </section>
    );
}

export default Profile;