import { React, useState} from 'react'
import Sidebar from '../components/Sidebar'
import Cards from '../components/ReusableComoponents/Cards'
import Heading from '../components/ReusableComoponents/Heading'


const Services = () => {
    const[array,setArray]= useState([
        {id: 1,title:"Web Design", value: "Some quick example text to build on the card title and make up the bulk of the card's content.",icon:'fa fa-desktop'},
        {id: 2,title:"Web Development", value: "Some quick example text to build on the card title and make up the bulk of the card's content.",icon:'fa fa-code'},
        {id: 3,title:"Responsive Design", value: "Some quick example text to build on the card title and make up the bulk of the card's content.",icon:'fa fa-mobile'},
    ])

    return (        
        <>
        <Sidebar id="services"/>                            
        <div className="outer-container">                
            <div className="container-service" id="services">                      
                    <Heading title="SERVICES" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"/>            
                    <Cards cardData={array}/>
                </div>            
        </div>
        </>
    )
}

export default Services
