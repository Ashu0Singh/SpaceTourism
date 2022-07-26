import React from "react";
import Homepage from './components/Homepage/Homepage.js'
import Destination from "./components/Destination/Destination.js";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/destination/:name" element= {<Destination />} />
        <Route path="/" element= {<Homepage />} />
        <Route path="/" element= {<Homepage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
