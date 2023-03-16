import { getRoles } from "@testing-library/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import './App.css';


const App = () => {

    const [position, setPosition] = useState({ x: 0, y: 0});
    /*const [gradient, setGradient] = useState('linear-gradient(to right, #00b4bd, #0083b0');*/
    const [gradient, setGradient] = useState('linear-gradient(0deg, red, yellow');

    useEffect(() => {
        function handleMouseMove(e) {
            setPosition({ x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);


    useEffect(() => {
        const distanceFromTop = position.y;
        const distanceFromBottom = window.innerHeight - position.y;
        const distanceFromLeft = position.x;
        const distanceFromRight = window.innerWidth - position.x;

        const 

        /*const newGradient = `linear-gradient(to top, #00b4db, #0083b0 ${distanceFromTop}px), 
                            linear-gradient(to bottom, #00b4db, #0083b0 ${distanceFromBottom}px),
                            linear-gradient(to left, #00b4db, #0083b0 ${distanceFromLeft}px), 
                            linear-gradient(to right, #00b4db, #0083b0 ${distanceFromRight}px)`;*/

        setGradient(newGradient);
    }, [position]);

    const [status, setStatus] = useState('off');

    const handleClick = () => {
        if (status === 'on')
            setStatus('off');
        else
            setStatus('on');
    }
    
   
    const style = {
        background: gradient,
        /*backgroundColor: "white",*/
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
    
    



    return (
    <>
    <div style={style}>
        <div className="title-section">
            <div className="title-info">
                <h1>Kieran  O'Gara</h1>
            </div> 
            <div className="title-info">
                <h1>Choose a path</h1>
            </div>
        </div>

        <div className="button-section">
            <div className="work">
                <h3>{status}</h3>
            </div>
            <div className="personal" onClick={handleClick}>
                <h3>{status}</h3>
            </div>
        </div>
        <footer className="contact">
            <h2>Contact Me!</h2>
            
        </footer>
    </div>
    </>     
    );
}



export default App;