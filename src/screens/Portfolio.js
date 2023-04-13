import React from "react";
import '../Styles/Portfolio/Portfolio.css';
import picture from '../assets/images/profile.png'
import githubButton from '../assets/svgs/github.svg';
import envelopeSolid from '../assets/svgs/envelope-solid.svg';
import linkedin from '../assets/svgs/linkedin.svg';
import mastadon from '../assets/svgs/mastodon.svg';
import internetExplorer from '../assets/svgs/internet-explorer.svg';

const Portfolio = () => {
    return (
        <>
            <div className="introScreen">
                <div className="introContent">
                    <div className="name">
                        <h1>Kieran O'Gara</h1>
                    </div>
                    <div>
                        <img src={picture} alt="me" className="photo" />
                    </div>
                
                    <div className="quickLinks">
                        <ul>
                            <li><a href="https://github.com/Kogara13"><img src={githubButton} alt="logo" /></a></li>
                            <li><img src={envelopeSolid} alt="logo" /></li>
                            <li><a href="https://www.linkedin.com/in/kieran-ogara-044b6a1a8/"><img src={linkedin} alt="logo" /></a></li>
                            <li><img src={mastadon} alt="logo" /></li>
                            <li><img src={internetExplorer} alt="logo" /></li>
                        </ul>
                    </div>
                </div>  
            </div>


            <div className="aboutMe">
                <div className="aboutPhotos">
                    <h1>This is where photos will go</h1>
                </div>
                <div className="aboutText">
                    <p>Hello! I'm Kieran! I'm a programmer with an interest in just about every field including front-end web design, back-end development and computer networking, and anything else that catches my eye. I found my passion for 
                        programming in college, and haven't stopped learning and progressing since. I'm also a big Linux enthusiast, a multi-athlete, and much more. I've built this website to be able to grow along side me 
                        as I continue to develop my skills. I hope you enjoy it!
                    </p>
                </div>
            </div>

            <div className="certificationSection">
                <div className="certificationTitle">
                    <h2>Here are some certifications I'm working towards completing</h2>
                </div>
                <div className="certificationList">
                </div>
            </div>

            <div className="projectSection">
                <div className="projectIntro">
                    <h2>Here are the personal projects I'm either working on or have completed</h2>
                    <h3>(For now, these will just link to their respective github pages)</h3>
                </div>

                <div className="projectList">
                    
                    <div className="project">
                        <h1>This Site!</h1>
                        <p>Jumping feet first into React with this site</p>
                    </div>

                    <div className="project">
                        <h1>Coffee Temperature Machine</h1>
                        <p>Using Java to optimize your java</p>
                    </div>

                    <div className="project">
                        <h1>Capstone: Lend-A-Hand</h1>
                        <p>A React Native social media app for all your volunteer events</p>
                    </div>

                    <div className="project">
                        <h1>TUI Todo-List</h1>
                        <p>Becuase everything is better in a terminal</p>
                    </div>

                    <div className="project">
                        <h1>Password Manager</h1>
                        <p>A terimal-based password manager that accesses an encrypted, local database</p>
                    </div>

                    <div className="project">
                        <h1>Password Cracker</h1>
                        <p>A brute-force password cracker that uses parallel processing</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio;