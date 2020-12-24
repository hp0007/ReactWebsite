import React from 'react'
import Sidebar from '../components/Sidebar'
import Heading from '../components/ReusableComoponents/Heading'
import Button from '../components/ReusableComoponents/Button'
import Fade from 'react-reveal'
import Input from '../components/ReusableComoponents/Input'
import Label from '../components/ReusableComoponents/Label'
import {ImLocation} from 'react-icons/im'
import {IoMdCall} from 'react-icons/io'
import {IoMdMail} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'

function Contact() {
    var a = [];
    var handlecallback = (dataFromChild) => {
        a.push(dataFromChild)
    }
    var handleSubmit = (e) => {                
        e.preventDefault();
    }
    return (
        <div className="container-contact" id="contact">
            <Sidebar id="contact" />
            <Fade top>
                <Heading title="GET IN TOUCH" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!" />
            </Fade>
            <div className="container">
                <div className="row">
                    <Fade left>
                        <div className="col-12 col-md-6 col-lg-6 ">                        
                                <form onSubmit={handleSubmit}>
                                    <Label title="Your Name :" />
                                    <Input type="text" maintype="input" parentcallback={handlecallback}/>
                                    <Label title="Email Address :" />
                                    <Input type="email" maintype="input" parentcallback={handlecallback}/>
                                    <Label title="Subject :" />
                                    <Input type="text" maintype="input" parentcallback={handlecallback}/>
                                    <Label title="Message :" />
                                    <Input type="textarea" maintype="textarea"/>                                                            
                                    <button className="btn" type="submit">Send</button>
                                </form>                
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-12 col-md-6 col-lg-6 right ">
                            <div className="detail ">
                                <div className="row">
                                    <div className="col-2 col-md-2 ">                                    
                                        <ImLocation />                
                                    </div>
                                    <div className="col-10 col-md-10 ">
                                        Rajkot, Gujarat
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 col-md-2">                                    
                                        <IoMdCall />
                                    </div>
                                    <div className="col-10 col-md-10">
                                        +91 91066 39372
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-2 col-md-2">                                    
                                        <IoMdMail />
                                    </div>
                                    <div className="col-10 col-md-10">
                                        hpgajjar95336@gmail.com
                                    </div>
                                </div>
                            </div>
                            <div className="account d-flex ">
                                <div className="git"><AiFillGithub /></div>
                                <div className="insta"><AiFillInstagram /></div>
                                <div className="twitt"><AiFillTwitterCircle /></div>
                            </div>
                            
                        </div>
                    </Fade>
                </div>                
            </div>
        </div>
    )
}

export default Contact
