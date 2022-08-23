import React,{ useState, useEffect } from "react";
import './Tech.css'
import NavBar from "../Navigation/Navigation";
import Data from '../../data.json'
import { Link, useParams } from "react-router-dom";

export default function Crew(){
    let className;
    let technology;
    const {name} = useParams();

    const [innerWidth, setWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        function handleChange(){
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleChange)
        return () => window.removeEventListener('resize' ,handleChange)
    }, []);

    if(name === 'vehicle')
    {
        className = ["active","",""];
        technology = Data.technology[0];
    }
    else if(name === 'spaceport')
    {
        className = ["","active",""];
        technology = Data.technology[1];
    }
    else if(name === 'spacecapsule')
    {
        className = ["","","active"];
        technology = Data.technology[2];
    }
    else{
        className = ["active","","",""];
        technology = Data.technology[0];
    }
    let image = innerWidth > 720 ? technology.images.portrait : technology.images.landscape;
    return (
        <div className="technology">
            <NavBar activeClass = {["","","","active"]}/>
            <main className="grid-container-technology flow">

                <h1 className="numbered-title"><span>03</span>Space Launch 101</h1>
                <article>
                    <h2 className="positions ff-san-cond letter-spacing-2 fs-200 upperCase">THE TERMINOLOGY…</h2>

                    <h1 className="fs-700 line-height-1 upperCase ">{technology.name}</h1>

                    <p className="fs-400 line-height-2 ff-san-normal">
                        {technology.description}
                    </p>
                </article>
                
                <div className="numbered-indicators flex">
                            <Link to="/SpaceTourism/technology/vehicle" className={className[0] + " link"}>1</Link>
                            <Link to="/SpaceTourism/technology/spaceport" className={className[1] + " link"} >2</Link>
                            <Link to="/SpaceTourism/technology/spacecapsule" className={className[2] + " link"}>3</Link>
                </div>
                {console.log(innerWidth)}{console.log(image)}
                <img src={process.env.PUBLIC_URL + image} alt="CrewImage"></img>
            </main>
        </div>
    );
}