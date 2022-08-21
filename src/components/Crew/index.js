import React from "react";
import './index.css'
import NavBar from "../Navigation/Navigation";
import Image from '../../assets/crew/image-mark-shuttleworth.png'
import Data from '../../data.json'

export default function Crew(){
    
    return (
        <div className="crew">{console.log(Data)}
            <NavBar activeClass = {["","","active",""]}/>
            <main className="grid-container-crew outline flow">

                <h1 className="numbered-title marginTop"><span>02</span> Meet your crew</h1>
                <article>
                    <h2 className="fs-500 upperCase">Mission Specialist</h2>

                    <h1 className="positions fs-700 line-height-1 upperCase "> Mark Shuttleworth </h1>

                    <p className="fs-400 line-height-2 ff-san-normal">
                                    Mark Richard Shuttleworth is the founder 
                                    and CEO of Canonical, the company behind 
                                    the Linux-based Ubuntu operating system. 
                                    Shuttleworth became the first South 
                                    African to travel to space as a space tourist.
                    </p>
                </article>
                
                <div className="dot-indicators indicators flex">
                            <button href="/" className="active"></button>
                            <button href="/" ></button>
                            <button href="/" ></button>
                            <button href="/" ></button>
                </div>
                <img className="outline" src={Image} alt="CrewImage"/>
            </main>
        </div>
    );
}