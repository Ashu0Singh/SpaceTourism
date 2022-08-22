import './Destination.css'
import NavBar from '../Navigation/Navigation'
import { Link,useParams } from 'react-router-dom'
import Data from '../../data.json'

export default function Destination(){
    let className;
    let destination;
    const {name} = useParams();
    if(name === 'mars')
    {
        className = ["active","","",""];
        destination = Data.destinations[1];
    }
    else if(name === 'moon')
    {
        className = ["","active","",""];
        destination = Data.destinations[0];
    }
    else if(name === 'europa')
    {
        className = ["","","active",""];
        destination = Data.destinations[2];
    }
    else if(name === 'titan')
    {
        className = ["","","","active"];
        destination = Data.destinations[3];
    }
    else
    {
        className = ["active","","",""];
        destination = Data.destinations[1];
    }
    return(
        <div className="destination">
            <a className="skip ff-san-normal fs-400" href="#main">Skip to Content</a>
            <NavBar activeClass = {["","active","",""]}/>
            <main className="container flow">
                <h1 className="numbered-title marginTop"><span>01</span> Pick your destination</h1>
                <div className='main-content grid-container'>
                    <img src={process.env.PUBLIC_URL + destination.images.png} alt='Moon'></img>
                    <div className='data flow'>
                        <nav>
                            <ul className="grid-nav linear-indicators flex fs-300 letter-spacing-2 ff-san-cond text-white upperCase ">
                                <li className={className[0]}><Link to="/SpaceTourism/destination/mars">Mars</Link></li>
                                <li className={className[1]}><Link to="/SpaceTourism/destination/moon">Moon</Link></li>
                                <li className={className[2]}><Link to="/SpaceTourism/destination/europa">Europa</Link></li>
                                <li className={className[3]}><Link to="/SpaceTourism/destination/titan">Titan</Link></li>
                            </ul>
                        </nav>
                        <p className='ff-serif fs-900 upperCase'>{destination.name}</p>
                        <p className='ff-san-normal fs-400'>
                            {destination.description}
                        </p>

                        <div className='flex'>
                            <div className="flexBox">
                                <p className="ff-san-cond fs-200 letter-spacing-3">Avg. Distance</p>
                                <p className="ff-serif fs-500">{destination.distance}</p>
                            </div>
                            <div className="flexBox">
                                <p className="ff-san-cond fs-200 letter-spacing-3">Est. travel time</p>
                                <p className="ff-serif fs-500">{destination.travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </main>
        </div>
        
    );
}