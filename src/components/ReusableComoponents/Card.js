import React from 'react'
import Fade from 'react-reveal/Fade'
const Card = (props) => {
    return (        
        <Fade top>
            <div className="card" style={{background:"#111"}}>                
                <i className={props.icon} ></i>
                <h4 className="text-center">{props.title}</h4>
                <div className="card-body ">
                    <p className="card-text">{props.valu}</p>
                </div>
            </div>                        
        </Fade>
    )
}

export default Card
