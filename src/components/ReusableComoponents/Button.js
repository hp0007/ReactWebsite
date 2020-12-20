import React from 'react'
import {Link} from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <Link to="/portfolio"><button className="btn">{props.name}</button></Link>
        </div>
    )
}

export default Button
