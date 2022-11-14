import React from 'react'
import './about.css'
import ME from '../../assets/ME.jpeg'
import { VscDebugStart } from 'react-icons/vsc'
import { FaUserGraduate } from 'react-icons/fa'
import { TbPlayerTrackNext } from 'react-icons/tb'
import { RiFocus3Line } from 'react-icons/ri'
import { BsPatchQuestionFill } from 'react-icons/bs'
import { GiStairsGoal } from 'react-icons/gi'
import 'animate.css';

const About = () => {
  return (
    <section id='about'>
      <h5>A little</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-img">
            <img src={ME} alt="about me img" className='img'/>
          </div>
        </div>
        
        <div className="about_content">
          <div className="about_cards">
            <article className='about-card animate__animated animate__backInLeft'>
              < VscDebugStart className='about_icon' />
              <h5>Started my Software Engineering journey by asking 'how?' </h5>
            </article>
            
            <article className='about-card'>
              < FaUserGraduate className='about_icon' />
              <h5>Attended General Assembly Software Engineering Bootcamp</h5>
            </article>
            
            <article className='about-card animate__animated animate__backInRight'>
              < TbPlayerTrackNext className='about_icon' />
              <h5>Implemented the skills I attained to build applications</h5>
            </article>
            <article className='about-card animate__animated animate__backInLeft'>
              < RiFocus3Line className='about_icon' />
              <h5>Focused on learning new technologies and building applications</h5>
            </article>
            <article className='about-card'>
              < BsPatchQuestionFill className='about_icon' />
              <h5>Front or back end? <span role="img" aria-label="thinking">🤔</span><br/> I enjoy working on both </h5>
            </article>
            <article className='about-card animate__animated animate__backInRight'>
              < GiStairsGoal className='about_icon' />
              <h5>My goals are to work on problem solving applications</h5>
            </article>
          </div>
          <p className='card_p'>
            Thank you for your interest in my portfolio.  My curiosity and eagerness to learn pushed me toward the world of software engineering.  I enjoy developing full stack applications. Not too long ago, I was messing around with HTML and CSS. Today, my applications interact with API's and databases. 
          </p>
          <a href="#contact" className='btn btn-primary card_btn'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About;