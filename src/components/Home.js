import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'
import Button from './ReusableComoponents/Button'
import Zoom from 'react-reveal/Zoom'
import Flip from 'react-reveal/Flip'
import {Animated} from "react-animated-css"

const Home = () => {
   
    return (
        <>            
            <div className="container-home" id="home">                
                <Sidebar id="home"/>                
                {/* <img src={back} className="back"/> */}                                                     
                    <div className="overlay">
                         <div className="content">
                                <Flip top>
                                    <h3>i am developer</h3>                                  
                                </Flip>
                                <Zoom >
                                    <p className="seco">I Make Wonderful Things</p>
                                    <p className="thir">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ex reprehenderit eos architecto sed debitis nam optio repellat quis. Aliquid suscipit nesciunt corrupti non quaerat obcaecati unde adipisci et!</p>
                                    <Button name="My Portfolio" link="/portfolio"/>
                                </Zoom>
                            </div>                    
                    </div>                
            </div>
        </>        
)}
export default Home