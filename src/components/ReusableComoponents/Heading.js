import React from 'react'

const Heading = (props) => {
    return (
        <div>
            <div className="container-1">                
                <h3>{props.title}</h3>
                <div className="line"></div>
                <p>{props.content}</p>
            </div>            
        </div>
    )
}

export default Heading
