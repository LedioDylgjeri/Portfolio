import React from 'react'
import './footer.css'
import Logo from '../../assets/favicon.ico'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#landing" >
        <img src={Logo} alt="my logo" className='footer_logo'/>
      </a>
      <ul className='links'>
        <li><a href="#landing">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; 2022 LEDIO DYLGJERI. ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer