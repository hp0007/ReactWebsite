import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

const Card = (props) => {
    return (        
        <Zoom>
            <div className="card">                
                <i className={props.icon} ></i>
                <h4 className="text-center">{props.title}</h4>
                <div className="card-body ">
                    <p className="card-text">{props.valu}</p>
                </div>
            </div>                        
        </Zoom>
    )
}

export default Card
