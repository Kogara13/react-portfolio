import { getRoles } from "@testing-library/react";
import React from "react";
import { useState, useEffect, useRef } from "react";
import './App.css';


const App = () => {

    //1. Center of Screen
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }
    const [windowCenter, setWindowCenter] = useState({ x: getWindowSize().innerWidth / 2, y: getWindowSize().innerHeight / 2});

    useEffect(() => {
        function handleWindowResize() {
            setWindowCenter({ x: (getWindowSize().innerWidth) / 2, y: (getWindowSize().innerHeight) / 2 });
            console.log(windowCenter.x, windowCenter.y);
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowCenter.x, windowCenter.y]);



     //2. Get Mouse Position
     const [position, setPosition] = useState({ x: 0, y: 0});
     useEffect(() => {
         function handleMouseMove(e) {
             setPosition({ x: ((e.clientX / window.innerWidth) * 100), y: ((e.clientY / window.innerHeight) * 100)});
             //console.log(position.x, position.y);
         }
 
 
         window.addEventListener("mousemove", handleMouseMove);
 
         return () => {
             window.removeEventListener("mousemove", handleMouseMove);
         };
     }, [position]);

    

    /*3. Angle and gradient
    const [gradient, setGradient] = useState('radial-gradient(farthest-side at 50%, red, yellow');

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
    */

    const [gradient, setGradient] = useState(400);
    const [gradientY, setGradientY] = useState(50);
    useEffect(() => {
        function handleGradient() {
            const MaxorMin = [-225, 325];
            if (position.x < 50)
                setGradient(MaxorMin[0] - ((position.x - 50) * 1.5));
            else if (position.x > 50)
                setGradient(MaxorMin[1] - ((position.x - 50) * 1.5));
            else
                setGradient(400);
            setGradientY(position.y);
            console.log(gradient);
        }

        window.addEventListener('mousemove', handleGradient);

        return () => {
            window.removeEventListener('mousemove', handleGradient);
        };
    }, [position, windowCenter, gradient])




    const [status, setStatus] = useState('off');

    const handleClick = () => {
        if (status === 'on')
            setStatus('off');
        else
            setStatus('on');
    }
    
   
    const style = {
        /*background: gradient,*/
        backgroundImage: `radial-gradient(circle at ${gradient}% ${gradientY}%, white, black 75%)`,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }


    /*from: { opacity: 0},
    to { opacity: 1},*/
    
    



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