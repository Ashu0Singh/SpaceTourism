import React from "react";
import './Crew.css'
import NavBar from "../Navigation/Navigation";
import Data from '../../data.json'
import { Link, useParams } from "react-router-dom";

export default function Crew(){
    let className;
    let crew;
    const {name} = useParams();
    if(name === 'Douglas')
    {
        className = ["active","","",""];
        crew = Data.crew[0];
    }
    else if(name === 'Mark')
    {
        className = ["","active","",""];
        crew = Data.crew[1];
    }
    else if(name === 'Victor')
    {
        className = ["","","active",""];
        crew = Data.crew[2];
    }
    else if(name === 'Anousheh')
    {
        className = ["","","","active"];
        crew = Data.crew[3];
    }
    else{
        className = ["active","","",""];
        crew = Data.crew[0];
    }
    return (
        <div className="crew">
            <NavBar activeClass = {["","","active",""]}/>
            <main className="grid-container-crew flow">

                <h1 className="numbered-title"><span>02</span> Meet your crew</h1>
                <article>
                    <h2 className="positions fs-500 upperCase">{crew.role}</h2>

                    <h1 className="fs-700 line-height-1 upperCase ">{crew.name}</h1>

                    <p className="fs-400 line-height-2 ff-san-normal">
                        {crew.bio}
                    </p>
                </article>
                
                <div className="dot-indicators indicators flex">
                            <Link to="/SpaceTourism/crew/Douglas" className={className[0]}></Link>
                            <Link to="/SpaceTourism/crew/Mark" className={className[1]} ></Link>
                            <Link to="/SpaceTourism/crew/Victor" className={className[2]}></Link>
                            <Link to="/SpaceTourism/crew/Anousheh" className={className[3]}></Link>
                </div>
                <img src={process.env.PUBLIC_URL + crew.images.png} alt="CrewImage"></img>
            </main>
        </div>
    );
}