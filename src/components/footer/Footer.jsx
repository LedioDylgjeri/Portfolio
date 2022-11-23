import React from 'react'
import './footer.css'
import Logo from '../../assets/favicon.ico'

function Footer() {
  return (
    <footer id='footer'>
      <a href="#landing" >
        <img src={Logo} alt="my logo" className='footer_logo'/>
      </a>
      <div className="footer_copyright">
        <small>&copy; 2022 LEDIO DYLGJERI. ALL RIGHTS RESERVED</small>
      </div>
    </footer>
  )
}

export default Footer