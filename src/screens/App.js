import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import Portfolio from './Portfolio';


const App = (props) => {
    return (
        <Router>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>        
        </Router>
    )
}

export default App;