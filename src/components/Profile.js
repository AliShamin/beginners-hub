import React from 'react';
import "./Profile.css";

function Profile() {
    return (
        <section className="profile-container">
            <section className='headline-section'>
                <h1><span>I</span> at Beginners Hub aims to support freshers
                    transitioning from various background to the world of Internet and Computers
                    and help them build their portfolio to enter in the IT world.
                </h1>
            </section>
            <section className="profile-section">
                <div className="profile-logo">
                    <img src="/images/my-profile.jpg"></img>
                    <div className="profile-logo-description">
                        <h3>Shamin Ali</h3>
                        <p>Software Developer</p>
                        <p>Online Instructor @Beginners Hub</p>
                        <p>BE, SGSITS Indore'19</p>
                    </div>
                </div>
                <div className="profile-description">
                    <p>My name is Shamin Ali, I am a Software Developer with demonstrated history of working with frontend, backend and cloud domain. Skilled in Spring Boot, Angular, Node Js, React and various cloud technologies such as AWS and GCP.
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
                            <span>Spring Boot</span>
                        </div>
                    </section>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </section>

        </section>
    );
}

export default Profile;