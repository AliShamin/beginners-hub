import { React } from "react";
import "../core/styles/AboutMe.css";

function AboutMe() {
    return (
        <>
            <section className="about-me-container">
                <div className="about-me-box">
                    <h2>About Me</h2>
                    <span>Get to Know Me Better</span>
                    <div className="about-me-profile-logo-container">
                        <img src="/images/my-profile.jpg"></img>
                    </div>
                    <p>
                        Hi, it's Shamin. I am a Full Stack Developer working for an AI/ML firm. I started my software engineering career with android development when I was in college  then I explored both frontend and backend development just after I landed my first job. I have a good amount of experience working with end to end application development from creating frontend, backend till deploying them on cloud using technologies such as AWS.
                    </p>
                    <p>
                        I have completed my Bachelor in Electronics and Telecommunication Engineering. Being from a non cs background I managed to learn software engineering subjects from NPTEL. And read some books on programming languages. One of my favorites is ‘Head First in C’. I would recommend to all the beginners to try that out.
                    </p>
                    <p>
                        In my engineering classes I had been taught  enough about hardware and computer networks. It made me  become more curious to know their role in the current tech world and the biggest usecase was nothing but the Internet that we consume on a daily basis. I remember the first time when I wrote the chat application in C and communicated via telnet, that feeling was awesome!
                    </p>
                    <p>
                        Based on my skills and the experience that I got in the past years in the field of software engineering, I would want to help freshers coming from different backgrounds who know nothing about IT and are hesitant towards switching. I could be a good person in guiding and supporting them.
                    </p>
                    <br/>
                    <div className="single-line"></div>
                    <section className="skills-section">
                        <span><b>I love doing</b></span>
                        <div className="skills-container">
                            <span>Frontend</span>
                            <span>Backend</span>
                            <span>Cloud</span>
                            <span>CICD</span>
                            <span>Automation</span>
                        </div>
                    </section>
                    <div className="single-line"></div>
                    <h2>Motivation</h2>
                    <p>
                        I saw that most engineers coming from different engineering background wanted to switch their career into IT. Many of them do not have the basic understanding of computer fundamentals and the knowledge of underlying infrastructure under which the whole Internet is operating.
                    </p>
                    <p>
                        My aim behind creating this platform is to provide them support in terms of lectures, blogs and hands on training sessions so that they become more confident and gain enough knowledge before they enter into the IT world.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AboutMe;