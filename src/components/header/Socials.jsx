import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="header_socials">
      <a 
        href="https://linkedin.com/in/ledio-d" 
        rel="noopener noreferrer" 
        target="_blank"
      >
        <BsLinkedin/>
      </a>
      <a 
        href="https://github.com/LedioDylgjeri" 
        rel='noopener noreferrer'
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  )
}

export default Socials
