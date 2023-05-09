import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Adminsidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/addrooms",
            name:"Addrooms",
            icon:<FaTh/>
        },
        {
            path:"/showrooms",
            name:"Showrooms",
            icon:<FaRegChartBar/>
        },
        {
            path:"/addemployee",
            name:"Addemployee",
            icon:<FaCommentAlt/>
        }
    ]
    const mainStyle = {
      marginLeft: isOpen ? "200px" : "50px"
    };
    const navigation=useNavigate()
    const adminemail = sessionStorage.getItem("user_email");
    if(adminemail !== "mohmat646@gmail.com" || adminemail === null ){
        navigation("/loginsignup")
    }else{
    
    return (
        <div className="container" style={{display:"flex"}}>
            <div className="roomimg">
        <img src="images\admin bg.jpg" alt="" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover'}} />
      </div>
      <div className='uirooms'>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="activesidebar">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main style={mainStyle}>{children}</main>
        </div>
        </div>
    );
            }
};

export default Adminsidebar;