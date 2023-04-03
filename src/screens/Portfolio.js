import React from "react";
import '../Styles/Portfolio/Portfolio.css';
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
                    <div classname="introLinks">
                        <div className="quickLinks">
                            <ul>
                                <li><img src={githubButton} alt="logo" /></li>
                                <li><img src={envelopeSolid} alt="logo" /></li>
                                <li><img src={linkedin} alt="logo" /></li>
                                <li><img src={mastadon} alt="logo" /></li>
                                <li><img src={internetExplorer} alt="logo" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="aboutMe">
                <div className="aboutContent">
                    <p>Hello! I'm Kieran O'Gara. I'm a programmer, athlete, Linux enthusiast, and much more. This website acts as a place for everything about me and my first foray into web design, and will 
                        be updated as a continue to learn more.
                    </p>
                </div>
            </div>

            <div class="projectIntro">
                <h2>Projects</h2>
                <p>Here is a list of a few projects I've got under my belt</p>
            </div>

            <div class="project-list">
                
                <div class="project">
                    <h1>This Site</h1>
                    <p>(WIP. Still practicing front-end and learning about responsive design)</p>
                </div>

                <div class="project">
                    <h1>Password Manager</h1>
                    <p>A terimal-based password manager that accesses an encrypted, local database</p>
                </div>

                <div class="project">
                    <h1>Todo-list</h1>
                    <p>A terminal-based todo-list in python</p>
                </div>

                <div class="project">
                    <h1>Password Cracker</h1>
                    <p>A brute-force password cracker that uses parallel processing</p>
                </div>
            </div>

        </>
    )
}

export default Portfolio;