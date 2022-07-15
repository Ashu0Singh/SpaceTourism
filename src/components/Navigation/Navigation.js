import React from "react";
import './Navigation.css'
import logo from '../../assets/shared/logo.svg'
import cross from '../../assets/shared/icon-close.svg'

export default function NavBar(){
    const [isOpen , setIsOpen] = React.useState(false);
    const [style , setStyle] = React.useState({});
    function hamburgerMenu(){
        if(isOpen === false){
            setIsOpen(true);
            setStyle({ 
                transform: 'translate(0%)'
            });
            
        }
        else if(isOpen){
            setIsOpen(false);
            setStyle({ 
                transform: 'translate(100%)'
            });
        }
        
        
    }
    return (
        <div className="NavBar flex">
            <img src={logo} alt="Space tourism logo"></img>
            <div></div>
            <button className="Navbar-toggle" style={isOpen? {backgroundImage: `url(${cross})`}:{}} onClick={hamburgerMenu}><span className="sr-only">Menu</span></button>
            <nav>
                <ul style={style} className="primary-navigation linear-indicators flex fs-300 letter-spacing-2 ff-san-cond text-white upperCase ">
                    <li className="active"><a href="/"><span>00</span>Home</a></li>
                    <li><a href="/"><span>01</span>Destination</a></li>
                    <li><a href="/"><span>02</span>Crew</a></li>
                    <li><a href="/"><span>03</span>Technology</a></li>
                </ul>
            </nav>
        </div>
    );
}