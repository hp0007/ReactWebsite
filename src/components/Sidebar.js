import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade'

const Header = (props) => {        
    
    const navdata = [
        {
            id:1,
            name:'HOME',
            path:'/ReactWebsite',    
            icon:'fa fa-home'
        },
        {
            id:2,
            name:'SERVICES',
            path:'/services',            
            icon:'fa fa-cogs'
        },
        {
            id:3,
            name:'ABOUT',
            path:'/about',            
            icon:'fa fa-exclamation-circle'
        },
        {
            id:4,
            name:'SKILLS',
            path:'/skills',
            icon:'fa fa-gg-circle'
        },
        {
            id:5,
            name:'PORTFOLIO',
            path:'/portfolio',            
            icon:'fa fa-file'
        },
        {
            id:6,
            name:'BLOG',
            path:'/blog',            
            icon:'fa fa-bold'
        },
        {
            id:7,
            name:'CONTACT',
            path:'/contact',            
            icon:'fa fa-id-badge'
        }
    ]
    const display = () =>{
        var ele = document.getElementById('sidebar');
        var ele2 = document.getElementById('mainicon');
        var ele3 = document.getElementById(props.id);    
        console.log(ele3)            
        if(ele.classList.contains('active')){
            ele.classList.remove('active')               
            switch(props.id){
                case 'services':ele3.style.width = "80%"
                                break
                case 'home':ele3.style.width = "80%"
                                break
                case 'about':ele3.style.width = "80%"
                                break
                case 'skill':ele3.style.width = "80%"                            
                                break                                
                default:alert('error')
            }
            ele2.classList.replace('fa-arrow-circle-right','fa-arrow-circle-left')            
        }
        else{
            ele.classList.add('active')                                
            switch(props.id){
                case 'services':ele3.style.width = "96.5%"
                                break
                case 'home':ele3.style.width = "96.5%"
                                break
                case 'about':ele3.style.width = "96.5%"                
                                break
                case 'skill':ele3.style.width = "96.5%"
                                break                                
                default:alert('error')
            }
            ele2.classList.replace('fa-arrow-circle-left','fa-arrow-circle-right')            
        }
    }  
 
    return (
        
        <>
        <Fade left>        
            <div className="sidepart active"  id="sidebar">    
                <i class="fa fa-arrow-circle-right" onClick={display} id="mainicon"></i>           
                <div className="img-profile"></div>
                <h4 className="name">Harshit Gajjar</h4>
                <p className="work">Web Designer</p>
                <div className="container">                    
                    <div className="sidebar active" >
                    {
                        navdata.map(data => {
                            return(    
                                <Link className="sidebar-item" to={data.path} key={data.id}  onClick={display}>                                    
                                    {data.name}
                                    <i className={data.icon}/>                                                                           
                                </Link>
                            )
                        })
                    }                                         
                    </div>                                                     
                </div>
            </div>
            </Fade>
        </>
)}

export default Header
