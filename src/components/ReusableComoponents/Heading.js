import React from 'react'
import Fade from 'react-reveal/Fade'

const Heading = (props) => {
    return (

        <div>
            <Fade top>
                <div className="container-1">                
                    <h3>{props.title}</h3>
                    <div className="line"></div>
                    <p>
                        {props.content}</p>
                </div>
            </Fade>            
        </div>
    )
}

export default Heading
