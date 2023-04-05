//import { getRoles } from "@testing-library/react";
import React from "react";
import { useState, useEffect } from "react";
import { useSpring, animated } from 'react-spring'
import { NavLink } from "react-router-dom";
import '../Styles/Home/Home.css';


const Home = () => {
    const [work, setWork] = useSpring(() => ({
        opacity: 1,
        transform: 'scale(1)',
        config: { mass: 1, tension: 170, friction: 26},
    }));

    const [personal, setPersonal] = useSpring(() => ({
        opacity: 1,
        transform: 'scale(1)',
        config: { mass: 1, tension: 170, friction: 26},
    }));

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
            console.log(position.x, position.y);
         }
 
 
         window.addEventListener("mousemove", handleMouseMove);
 
         return () => {
             window.removeEventListener("mousemove", handleMouseMove);
         };
     }, [position]);


    const [gradient, setGradient] = useState(400);
    const [gradientY, setGradientY] = useState(50);
    useEffect(() => {
        function handleGradient() {
            const MaxorMin = [-225, 325];
            if (position.x < 50){
                setGradient(MaxorMin[0] - ((position.x - 50) * 1.5));
            }
            else if (position.x > 50) {
                setGradient(MaxorMin[1] - ((position.x - 50) * 1.5));
            }
            // else {
            //     // set({ opacity: 1 });
            //     setGradient(400);
            //     set({ opacity: 1 });
            // }
            setGradientY(position.y);
            console.log(gradient);
        }

        window.addEventListener('mousemove', handleGradient);

        return () => {
            window.removeEventListener('mousemove', handleGradient);
        };
    }, [position, gradient])




    const [status, setStatus] = useState('off');

    const handleClick = () => {
        if (status === 'on')
            setStatus('off');
        else
            setStatus('on');
    }
    
    const style = {
        backgroundColor: '#303030',
        height: '100vh',
        position: 'relative',
        backgroundImage: `radial-gradient(circle at ${gradient}% ${gradientY}%, white, black 75%)`,
    } 

    const workON = () => {
        setWork({ transform: 'scale(1.1)' });
    }
    
    const workOFF = () => {
        setWork({ transform: 'scale(1)' });
    }

    const personalON = () => {
        setPersonal({ transform: 'scale(1.1)' });
    }
    
    const personalOFF = () => {
        setPersonal({ transform: 'scale(1)' });
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
                <NavLink to='/Portfolio'>
                    <animated.div className="button" style={work} onMouseEnter={workON} onMouseLeave={workOFF}>
                        <div className="work">
                            {status}
                        </div>
                    </animated.div>
                </NavLink>
                <NavLink to='/Personal'>
                    <animated.div className="button" style={personal} onMouseEnter={personalON} onMouseLeave={personalOFF} onClick={handleClick}>
                        <div className="personal">
                            {status}
                        </div>
                    </animated.div>
                </NavLink>
            </div>
        </div>
    </>     
    );
}

export default Home;