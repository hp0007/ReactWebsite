import React from 'react'
import Card from '../../components/ReusableComoponents/Card'

const Cards = (props) => {
    return (
        <>            
            <div className="container align-items-center">                
                <div className="row">
                    {
                        props.cardData.map(data => {
                            return(
                                <div className="col-12 col-sm-12 col-md-12 col-lg-4" key={data.id}>                                
                                    <Card valu={data.value} title={data.title} icon={data.icon}/>
                                </div>  
                            )                            
                        })
                    }                                      
                </div>
            </div>
        </>
    )
}

export default Cards
