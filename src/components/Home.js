import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'
import Button from './ReusableComoponents/Button'
import Fade from 'react-reveal/Fade'
import '../responsive.css'

const Home = () => {
    
    return (
        <>            
            <div className="container-fluid" id="home">                
                <Sidebar id="home"/>
                {/* <img src={back} className="back"/> */}                                                     
                    <div className="overlay">
                        <Fade right>
                            <div className="content">
                                <h1>I AM DESIGNER</h1>
                                <p className="seco">I Make Wonderful Things</p>
                                <p className="thir">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ex reprehenderit eos architecto sed debitis nam optio repellat quis. Aliquid suscipit nesciunt corrupti non quaerat obcaecati unde adipisci et!</p>
                                <Button name="My Porfolio" />
                            </div>                    
                        </Fade>
                    </div>                
            </div>
        </>        
)}
export default Home