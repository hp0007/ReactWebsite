import React from 'react'
import { NavLink } from 'react-router-dom'
import homeImg from '../images/icons/home.png' 
import serviceImg from '../images/icons/technical-support.png'
import aboutImg from '../images/icons/about.png'
import skillImg from '../images/icons/skill.png'
import portfolioImg from '../images/icons/briefcase.png'
import contactImg from '../images/icons/contact.png'

const Header = (props) => {        
    
    const navdata = [
        {
            id:1,
            name:'Home',
            path:'/ReactWebsite',    
            icon:homeImg
        },
        {
            id:2,
            name:'Services',
            path:'/services',            
            icon:serviceImg
        },
        {
            id:3,
            name:'About',
            path:'/about',            
            icon:aboutImg
        },
        {
            id:4,
            name:'Skills',
            path:'/skills',
            icon:skillImg
        },
        {
            id:5,
            name:'Portfolio',
            path:'/portfolio',            
            icon:portfolioImg
        },        
        {
            id:6,
            name:'Contact',
            path:'/contact',            
            icon:contactImg
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
                                    <img src={data.icon} style={{color:'black'}}/>                                                                           
                                </NavLink>
                            )
                        })
                    }                                         
                    </div>                                                     
                </div>                
            </div>                
        </>
)}

export default Header
