import {React, useState} from 'react'
import Sidebar from '../components/Sidebar'
import Heading from '../components/ReusableComoponents/Heading'
import {useForm} from 'react-hook-form'
import Fade from 'react-reveal'
import Label from '../components/ReusableComoponents/Label'
import {ImLocation} from 'react-icons/im'
import {IoMdCall} from 'react-icons/io'
import {IoMdMail} from 'react-icons/io'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'



const Contact = () => {
    const {register , handleSubmit} = useForm() 

    return (
        <div className="container-contact" id="contact">          
            <Sidebar id="contact" />
            <Fade top>
                <Heading title="GET IN TOUCH" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!" />
            </Fade>
            <div className="container">
                <div className="row">
                    <Fade left>
                        <div className="col-12 col-md-12 col-lg-6 left">                        
                                <form method="post">
                                    <Label title="Your Name :" />
                                    <input type="text" name="fullname" id="name" ref={register} />
                                    <Label title="Email Address :" />
                                    <input type="email" name="email" id="email" ref={register} />
                                    <Label title="Subject :" />
                                    <input type="text" name="subject" id="subject" ref={register}/>
                                    <Label title="Message :" />
                                    <input type="textarea" name="msg" id="msg" ref={register} />                                                            
                                    <button className="btn" type="submit">Send</button>
                                </form>                
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="col-12 col-md-12 col-lg-6 right ">
                            <div className="detail">
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
                            <div className="account">
                                <a className="git" href="https://github.com/hp0007/ReactWebsite/"><AiFillGithub /></a>
                                <a className="insta" href="https://www.instagram.com/b_harshit_p/"><AiFillInstagram /></a>
                                <a className="twitt" href="https://twitter.com/Harshit32482089/"><AiFillTwitterCircle /></a>
                            </div>
                            
                        </div>
                    </Fade>
                </div>                
            </div>
        </div>
    )
}

export default Contact
