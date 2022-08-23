import React from "react";
import Homepage from './components/Homepage/Homepage'
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Tech"
import {BrowserRouter as Router , Route , Routes} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/destination/" element= {<Destination />} />
        <Route path="/destination/:name" element= {<Destination />} />
        <Route path="/crew/" element= {<Crew />} />
        <Route path="/crew/:name" element= {<Crew />} />
        <Route path="/technology" element= {<Technology />} />
        <Route path="/technology/:name" element= {<Technology />} />

        <Route path="/SpaceTourism/" element= {<Homepage />} />
        <Route path="/SpaceTourism/destination/" element= {<Destination />} />
        <Route path="/SpaceTourism/destination/:name" element= {<Destination />} />
        <Route path="/SpaceTourism/crew/" element= {<Crew />} />
        <Route path="/SpaceTourism/crew/:name" element= {<Crew />} />
        <Route path="/SpaceTourism/technology" element= {<Technology />} />
        <Route path="/SpaceTourism/technology/:name" element= {<Technology />} />
      </Routes>
    </Router>
    
  );
}

export default App;
