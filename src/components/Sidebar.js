import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {VscServerProcess} from 'react-icons//vsc'
import {BsPerson} from 'react-icons/bs'
import {RiStackLine} from 'react-icons/ri'
import {IoBriefcaseOutline} from 'react-icons/io5'
import {AiOutlinePhone} from 'react-icons/ai'

const Header = (props) => {        
    
    const navdata = [
        {
            id:1,
            name:'Home',
            path:'/ReactWebsite',    
            icon:<AiOutlineHome/>
        },
        {
            id:2,
            name:'Services',
            path:'/services',            
            icon:<VscServerProcess/>
        },
        {
            id:3,
            name:'About',
            path:'/about',            
            icon:<BsPerson/>
        },
        {
            id:4,
            name:'Skills',
            path:'/skills',
            icon:<RiStackLine/>
        },
        {
            id:5,
            name:'Portfolio',
            path:'/portfolio',            
            icon:<IoBriefcaseOutline/>
        },        
        {
            id:6,
            name:'Contact',
            path:'/contact',            
            icon:<AiOutlinePhone/>
        }
    ]
    
    const display = () =>{
        var sidebar = document.getElementById('sidebar');
        var maincontainer = document.getElementById('mainicon');
        var sectionofpage = document.getElementById(props.id);   
        if(window.screen.width > 900){
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
                                    <i>{data.icon}</i>
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
