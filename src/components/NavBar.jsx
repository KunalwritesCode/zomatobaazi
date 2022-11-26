import React from 'react';
import { FaUser } from "react-icons/fa";



function NavBar() {
  return (
    <div>
     <nav className='navbar'>
      <a href='#'>Get The App</a>
     
     <div className='navbar_menu_container'>
       <a href='#' className='link'> Investor Relation</a>
       <a href='#' className='link'> Add Restaurent</a>
       <a href='#' className='link'> Login</a>
       <a href='#' className='link'> Signup</a>
       <FaUser className='user_icon' />
      
       
     </div>
     </nav>
      
    </div>
  )
}

export default NavBar
