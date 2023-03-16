import { getRoles } from "@testing-library/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import './App.css';


const App = () => {

    
    
    
    


    //1. Get Mouse Position
    const [position, setPosition] = useState({ x: 0, y: 0});
    useEffect(() => {
        function handleMouseMove(e) {
            setPosition({ x: e.clientX, y: e.clientY})
        }


        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

   
    //2. Center of Screen
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    const [windowCenter, setWindowCenter] = useState({ x: 0, y: 0});

    useEffect(() => {
        function handleWindowResize() {
            setWindowCenter({ x: (getWindowSize().innerWidth) / 2, y: (getWindowSize.innerHeight) / 2 });
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    

    //3. Angle and gradient
    const [angle, setAngle] = useState(0);
    const [gradient, setGradient] = useState('linear-gradient(0deg, red, yellow');

    useEffect(() => {
        function handleAngleChange() {
            const hypotenuse = Math.sqrt(Math.pow(position.x - windowCenter.x, 2) + Math.pow(position.y - windowCenter.y,2));
            const distance = Math.abs(position.x - windowCenter.x);

            setAngle(Math.asin(distance/hypotenuse));
            const angleInDegrees = angle * (180/Math.PI);
            console.log(angleInDegrees); 
            const newGradient = 'linear-gradient({angleInDegrees}deg, red, yellow)';
            setGradient(newGradient);
        }

        return () => {
            window.addEventListener('mousemove', handleAngleChange);
        };
    }, [position, windowCenter, angle]);



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