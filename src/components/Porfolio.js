import React from 'react'
import Sidebar from '../components/Sidebar'
import Bubble from '../components/ReusableComoponents/Bubbles'

const Porfolio = () => {
    return (
        <div className="container-portfolio" id="portfolio">
            <Bubble />
            <Sidebar id="portfolio"/>
        </div>
    )
}

export default Porfolio
