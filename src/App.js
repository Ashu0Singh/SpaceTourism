import React from "react";
import Homepage from './components/Homepage/Homepage.js'
import Destination from "./components/Destination/Destination.js";
import Crew from "./components/Crew/index.js";
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/destination/:name" element= {<Destination />} />
        <Route path="/crew" element= {<Crew />} />
        <Route path="/tech" element= {<Homepage />} />
        <Route path="/SpaceTourism/" element= {<Homepage />} />
        <Route path="/SpaceTourism/destination/:name" element= {<Destination />} />
        <Route path="/SpaceTourism/crew" element= {<Crew />} />
        <Route path="/SpaceTourism/tech" element= {<Homepage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
