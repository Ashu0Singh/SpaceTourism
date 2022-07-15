import React from "react";
import './DesignSystem.css'

export default function DesignSystem(){
    return(
        <>
        <div className="container">
            <h1 className="upperCase ff-san-normal">Design system</h1>
            
            <section id="colors">
                <h2 className="numbered-title"><span className="text-accent">01</span> colors</h2>
                <div className="marginTop flex">
                    <div className="flexGrow">
                        <div className="color bg-dark text-white ff-serif fs-500">#0B0D17</div>
                        <p className="ff-san-normal"><span className="text-accent ">RGB</span> 11, 13, 23</p>
                        <p className="ff-san-normal"><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
                    </div>
                    <div className="flexGrow">
                        <div className="color bg-accent text-dark ff-serif fs-500">#D0D6F9</div>
                        <p className="ff-san-normal"><span className="text-accent">RGB</span> 208, 214, 249</p>
                        <p className="ff-san-normal"><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
                    </div>
                    <div className="flexGrow">
                        <div className="color bg-white text-dark ff-serif fs-500" >#FFFFFF</div>
                        <p className="ff-san-normal"><span className="text-accent">RGB</span> 255, 255, 255</p>
                        <p className="ff-san-normal"><span className="text-accent">HSL</span> 0°, 0%, 100%</p>
                    </div>
                </div>
            </section>
            
            <section id="typography">
                <h2 className="numbered-title marginTop"><span>02 </span>Typography</h2>
                <div className="flex flexBox">
                    <div className="flow flexBox">
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Heading 1 - Bellefair Regular - 150px</p>
                            <p className="fs-900 ff-serif upperCase">Earth</p>
                        </div>
                        <div>  
                            <p className="text-accent ff-san-normal fs-300">Heading 2 - Bellefair Regular - 100px</p>
                            <p className="fs-800 ff-serif upperCase">Venus</p>
                        </div>
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Heading 3 - Bellefair Regular - 56px</p>
                            <p className="fs-700 ff-serif upperCase">Jupiter & Saturn</p>
                        </div>
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Heading 4 - Bellefair Regular - 32px</p>
                            <p className="ff-san-normal fs-600">Uranus, Neptune, & Pluto</p>
                        </div>
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                            <p className="ff-san-cond fs-500 letter-spacing-1" >So, you want to travel to space</p>
                        </div>
                    
                    </div>
                    
                    <div  className="flow flexBox">
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Subheading 1 - Bellefair Regular - 28px</p>
                            <p className="ff-serif fs-500">384,400 km</p>
                        </div>
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <p className="ff-san-cond fs-200 letter-spacing-3">Avg. Distance</p>
                        </div>
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                            <p className="ff-san-cond fs-300 letter-spacing-2">Europa</p>
                        </div>
                        <div> 
                            <p className="text-accent ff-san-normal fs-300">Body Text</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                        </div>
                    </div>

                    
                
                
            
                    </div>
                </section>
                <section className="flow marginTop" id="interactive-elements">
                    <h2 className="numbered-title"><span>03</span> Interactive elements</h2>
                    <nav>
                        <ul className="primary-navigation linear-indicators flex fs-300 letter-spacing-2 ff-san-cond text-white upperCase ">
                            <li className="active"><a href="/"><span>01</span>Active</a></li>
                            <li><a href="/"><span>02</span>Hovered</a></li>
                            <li><a href="/"><span>03</span>Idle</a></li>
                        </ul>
                    </nav>
                    
                    <div className="flex">
                        <div className="flexBox flex">
                            <a className="large-button fs-600 upperCase letter-spacing-3 ff-serif bg-white text-dark" href="/As">Explore</a>
                        </div>
                        
                        <div className="flexBox flow">
                            <div className="tabs linear-indicators flex">
                                <a href="/" className="tab-list bg-dark text-accent fs-300 ff-san-cond letter-spacing-2 upperCase active"> Moon</a>
                                <a href="/" className="tab-list bg-dark text-accent fs-300 ff-san-cond letter-spacing-2 upperCase"> Mars</a>
                                <a href="/" className="tab-list bg-dark text-accent fs-300 ff-san-cond letter-spacing-2 upperCase"> Europa</a>
                            </div>
                            
                            
                            <div className="dot-indicators flex">
                                <button href="/" className="active"></button>
                                <button href="/" ></button>
                                <button href="/" ></button>
                            </div>
                            
                            Numbers
                        </div>
                    </div>
                </section>
        </div>
        </>
    );
}