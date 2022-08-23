import NavBar from "../Navigation/Navigation";
import './Homepage.css'
import {Link} from 'react-router-dom';

export default function LandingPage(){
    return (
        <body className="home">
           <a className="skip ff-san-normal fs-400" href="#main">Skip to Content</a>
           <NavBar activeClass = {["active","","",""]}/>
           <main id="main" className="grid-container">
                <div className="flexBox">
                    <h1 className="text-accent ff-san-cond fs-500 upperCase letter-spacing-1">So, you want to travel to<br />
                        <span className="fs-900 ff-serif d-block">Space</span>
                    </h1>
                    <p className="ff-san-normal fs-400" style={{lineHeight: "32px"}}>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="flexBox flex ">
                    <Link className="large-button upperCase letter-spacing-3 ff-serif bg-white text-dark"
                    to="/SpaceTourism/destination/">
                        Explore
                    </Link>
                </div>
                
            </main>
            
            

        </body>
    );
}