import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './Sidebar'
import Button from './ReusableComoponents/Button'
import Bubble from '../components/ReusableComoponents/Bubbles'
import Fade from 'react-reveal/Fade'
import $ from 'jquery'

const Home = () => {
    $(document).ready(function(){
        var mouseX, mouseY;
        var ww = $( window ).width();
        var wh = $( window ).height();
        var traX, traY;
        $(document).mousemove(function(e){
          mouseX = e.pageX;
          mouseY = e.pageY;
          traX = ((4 * mouseX) / 570) + 40;
          traY = ((4 * mouseY) / 570) + 50;
          console.log(traX);
          $(".title").css({"background-position": traX + "%" + traY + "%"});
        });
      });
    return (
        <>            
            <div className="container-home" id="home">    
                <Bubble />            
                <Sidebar id="home"/>                
                {/* <img src={back} className="back"/> */}                                                     
                    <div className="overlay">
                        <Fade right>
                            <div className="content">
                                <div class="title">I AM DESIGNER</div>  
                                <p className="seco">I Make Wonderful Things</p>
                                <p className="thir">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit ex reprehenderit eos architecto sed debitis nam optio repellat quis. Aliquid suscipit nesciunt corrupti non quaerat obcaecati unde adipisci et!</p>
                                <Button name="My Porfolio" link="/portfolio"/>
                            </div>                    
                        </Fade>
                    </div>                
            </div>
        </>        
)}
export default Home