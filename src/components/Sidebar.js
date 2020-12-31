import React from 'react'
import { NavLink } from 'react-router-dom'
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
            name:'CONTACT',
            path:'/contact',            
            icon:'fa fa-id-badge'
        }
    ]
    
    const display = () =>{
        var sidebar = document.getElementById('sidebar');
        var maincontainer = document.getElementById('mainicon');
        var sectionofpage = document.getElementById(props.id);   
        if(window.screen.width > 700){
            if(sidebar.classList.contains('active')){
                sidebar.classList.remove('active')               
                switch(props.id){
                    case 'services': sectionofpage.style.width = "80%"
                                    break
                    case 'home': sectionofpage.style.width = "80%"
                                    break
                    case 'about': sectionofpage.style.width = "80%"
                                    break
                    case 'skill': sectionofpage.style.width = "80%"                            
                                    break
                    case 'portfolio': sectionofpage.style.width = "80%"                            
                                    break                                                
                    case 'contact': sectionofpage.style.width = "80%"
                                    break
                    default:alert('error')
                }
                maincontainer.classList.replace('fa-bars','fa-close')            
            }
            else{
                sidebar.classList.add('active')                                
                switch(props.id){
                    case 'services': sectionofpage.style.width = "96%"
                                    break
                    case 'home': sectionofpage.style.width = "96%"
                                    break
                    case 'about': sectionofpage.style.width = "96%"                
                                    break
                    case 'skill': sectionofpage.style.width = "96%"
                                    break
                    case 'portfolio': sectionofpage.style.width = "96%"
                                    break                                                                                
                    case 'contact': sectionofpage.style.width = "96%"
                                    break
                    default:alert('error')
                }
                maincontainer.classList.replace('fa-close','fa-bars')        
            }
        } 
        else{            
            
            if(sidebar.classList.contains('active')){
                sidebar.classList.remove('active')                     
                maincontainer.classList.replace('fa-bars','fa-close')                        
            }
            else{
                sidebar.classList.add('active')                        
                maincontainer.classList.replace('fa-close','fa-bars')                     
            }
        }       
    }             
    return (
        
        <>
        <Fade left>        
            <div className="sidepart active"  id="sidebar">    
                <i className="fa fa-bars" onClick={display} id="mainicon"></i>           
                <div className="img-profile"></div>
                <h4 className="name">Harshit Gajjar</h4>
                <p className="work">Web Designer</p>
                <div className="container">                    
                    <div className="sidebar active">
                    {
                        navdata.map(data => {
                            return(    
                                <NavLink className="sidebar-item" to={data.path} key={data.id}  onClick={display} activeClassName="active2">                                    
                                    {data.name}
                                    <i className={data.icon}/>                                                                           
                                </NavLink>
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
