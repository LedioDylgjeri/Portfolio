import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ME-2.jpg'
import Socials from './Socials'
import 'animate.css'

const header = () => {
  return (
    <header>
      <div id='landing' className="container header_container">
        <h5 class="animate__animated animate__zoomIn">Hello, my name is</h5>
        <h1 className="animate__animated animate__bounceInDown">Ledio Dylgjeri</h1>
        <h5 className="text-light animate__animated animate__zoomIn">Full Stack Developer</h5>
        <CTA />
        <Socials />
        <div className="me">
          <img className='animate__animated animate__bounceInUp me' src={ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll to Bottom</a>
      </div>
    </header>
  )
}

export default header