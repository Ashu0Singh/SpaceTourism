import './Destination.css'
import NavBar from '../Navigation/Navigation';
import moon from '../../assets/destination/image-moon.png'
import {BrowserRouter as Router} from "rea"

export default function Destination(){
    return(
        <div className="destination">
            <a className="skip ff-san-normal fs-400" href="#main">Skip to Content</a>
            <NavBar />
            <main className="container">
                <h1 className="numbered-title marginTop"><span>01</span> Pick your destination</h1>
                <div className='main-content grid-container'>
                    <img src={moon} alt='Moon'></img>
                    <div className='data flow'>
                        <nav>
                            <ul className="grid-nav linear-indicators flex fs-300 letter-spacing-2 ff-san-cond text-white upperCase ">
                                <li className="active"><a href="/">Mars</a></li>
                                <li><a href="/">Moon</a></li>
                                <li><a href="/">Europa</a></li>
                                <li><a href="/">Titan</a></li>
                            </ul>
                        </nav>
                        <p className='ff-serif fs-900 upperCase'>Moon</p>
                        <p className='ff-san-normal fs-400'>
                            See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                            regain perspective and come back refreshed. While you’re there, take in some history 
                            by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>

                        <div className='flex'>
                            <div className="flexBox">
                                <p className="ff-san-cond fs-200 letter-spacing-3">Avg. Distance</p>
                                <p className="ff-serif fs-500">384,400 km</p>
                            </div>
                            <div className="flexBox">
                                <p className="ff-san-cond fs-200 letter-spacing-3">Est. travel time</p>
                                <p className="ff-serif fs-500">3 days</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </main>
        </div>
        
    );
}