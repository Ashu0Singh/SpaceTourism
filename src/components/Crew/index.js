import React from "react";
import './index.css'
import NavBar from "../Navigation/Navigation";
import Image from '../../assets/crew/image-mark-shuttleworth.png'

export default function Crew(){
    return (
        <div className="crew">
            <NavBar activeClass = {["","","active",""]}/>
            <main className="container outline">
                <h1 className="numbered-title marginTop"><span>02</span> Meet your crew</h1>
                <div className="crewMain outline">
                    <div className="details flex">
                        <div>
                            <p className="position marginTop fs-500 upperCase">Mission Specialist</p>
                            <h1 className="fs-700 line-height-1 upperCase "> Mark Shuttleworth </h1>
                            <p className="fs-400 line-height-2 ff-san-normal paragraph">
                                            Mark Richard Shuttleworth is the founder 
                                            and CEO of Canonical, the company behind 
                                            the Linux-based Ubuntu operating system. 
                                            Shuttleworth became the first South 
                                            African to travel to space as a space tourist.
                            </p>
                        </div>
                        

                        <div className="dot-indicators flex">
                                <button href="/" className="active"></button>
                                <button href="/" ></button>
                                <button href="/" ></button>
                                <button href="/" ></button>
                        </div>
                    </div>
                    <div className="outline">
                        <img className="image outline" src={Image} alt="CrewImage"/>
                    </div>
                    
                </div>
            </main>
        </div>
    );
}