import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopeContext } from '../../context/ShopeContext'
import { IoIosArrowDropdown } from "react-icons/io";

const Navbar = () => {
    const [menu,setmenu]=useState("shop")
    const {gettotalitems}=useContext(ShopeContext)
    const menuref=useRef();

  const dropdown_toggle=(e)=>{
menuref.current.classList.toggle('nav-menu-visible')
e.target.classList.toggle('open')
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <IoIosArrowDropdown className='nav-dropdown' onClick={dropdown_toggle}/>
      <ul ref={menuref} className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration:"none"}} to='/'>Shope</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration:"none"}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration:"none"}} to='womens'>Women</Link>{menu==="/womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration:"none"}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-bar-count">{gettotalitems()}</div>
      </div>
    </div>
  )
}

export default Navbar
