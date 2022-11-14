import React from 'react'
import './nav.css'
import { AiTwotoneHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { GrProjects } from 'react-icons/gr'
import { GrContact } from 'react-icons/gr'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#landing" 
        onClick={() => setActiveNav('#landing')}
        className={activeNav === "#landing" ? 'active' : ''}
      >
        < AiTwotoneHome />
      </a>
      <a href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === "#about" ? 'active' : ''}
      >
        < SiAboutdotme />
      </a>
      <a href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={activeNav === "#projects" ? 'active' : ''}
      >
        < GrProjects />
      </a>
      <a href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === "#contact" ? 'active' : ''}
      >
        < GrContact />
      </a>
      <a href="#footer"
        onClick={() => setActiveNav('#footer')}
        className={activeNav === "#footer" ? 'active' : ''}
      >
        < AiOutlineArrowDown />
      </a>
    </nav>
  )
}

export default Nav