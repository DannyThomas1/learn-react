import React from 'react'
import "../styles/Navbar.css"
import logo from "../images/react-icon-small.png"

function Navbar() {
  return (
    <nav className='nav'>
      <div className='logo-div'>
        <img src={logo} className="logo" alt='logo' />
        <h1>ReactFacts</h1>
      </div>
      <div className='web-title'>
        <h4 className='web-title-header'>React Course - Project 1</h4>
      </div>
    </nav>
  )
}

export default Navbar