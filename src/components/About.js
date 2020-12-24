import React from 'react'
import Sidebar from './Sidebar'
import Heading from './ReusableComoponents/Heading'
import img1 from '../images/profile2.png'
import Fade from 'react-reveal'

const About = () => {
    return (        
        <>
            <Sidebar id="about"/>                                    
                <div className="container-about" id="about">
                    <Fade top>                    
                            <Heading title="ABOUT" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"/>            
                    </Fade>  
                    <div className="row">
                        <Fade left>
                        <div className="col-12 col-md-6 left">
                            <img src={img1}/>
                        </div>
                        </Fade>
                        <Fade right>
                        <div className="col-12 col-md-6 right">
                            <h4>Hi There</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident qui eaque temporibus voluptates labore porro esse placeat consequuntur delectus at corrupti molestias necessitatibus dicta, quos, unde itaque explicabo quasi dolorem.</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="row">                
                                <div className="col-6 col-md-6 inleft">
                                    <Fade top>
                                        <h4>Name:</h4>
                                        <p>Harshit Gajjar</p>
                                        <h4>Phone:</h4>
                                        <p>+91 9106639372</p>
                                    </Fade>                            
                                </div>                            
                                <div className="col-6 col-md-6 inright">
                                    <Fade top>
                                        <h4>Email:</h4>
                                        <p>hpgajjar95336@gmail.com</p>
                                        <h4>Linkedin:</h4>
                                        <p>Harshit Gajjar</p>
                                    </Fade>
                                </div>                            
                            </div>
                        </div>
                        </Fade>
                    </div>                
            </div>
        </>
    )
}

export default About
