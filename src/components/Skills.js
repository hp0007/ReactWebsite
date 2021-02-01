import React from 'react'
import Sidebar from './Sidebar'
import Heading from './ReusableComoponents/Heading'
import Button from './ReusableComoponents/Button'
import Fade from 'react-reveal'



const Skills = () => {
    const data = [
        {id:1,text:'HTML',value: 85 },
        {id:2,text:'CSS',value: 70 },
        {id:3,text:'JAVA SCRIPT',value: 80 },
        {id:4,text:'REACT JS',value: 75 }
    ]
    
    return (
        <>
            <Sidebar id="skill" id1="prog"/>                                    
                <div className="container-skill" id="skill">                                                       
                    <Heading title="SKILLS" content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa cumque error modi esse quos fuga placeat vero ut explicabo, repudiandae earum rerum tempore asperiores soluta alias dignissimos porro? Quidem, rem!"/>                                
                    <div className="row">
                        <Fade left>
                            <div className="col-12  col-md-12 col-lg-6 left">   
                                <div className="content">
                                    <p className="title">I,M EXPERT ON</p>
                                    <h3 className="heading">Let,s Work Together</h3>
                                    <p className="inn-content">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci molestiae pariatur ipsa, tempore corporis cum dicta dolorum, repudiandae enim quo animi? Dolor nesciunt excepturi architecto qui repellat in incidunt expedita!</p>
                                    <Button name="Hire Me Now" />
                                </div>                             
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-12 col-md-12 col-lg-6 right" >                                                                    
                                {
                                    data.map((data1) => {
                                        return(
                                            <div className="d-flex" >
                                                <div className="progress" >                                    
                                                    <div className="progress-inn"  key={data1.id} data-in={data1.value} style={{width:data1.value + '%'}}>  
                                                        {data1.value}%                                                                                                
                                                    </div>                                
                                                </div>
                                                <label>{data1.text}</label>
                                            </div>                                                      
                                        )
                                    })                                    
                                }                                                                                                                                       
                            </div>
                        </Fade>
                    </div>                
            </div>
        </>
    )
}

export default Skills
