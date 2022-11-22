import React, {useEffect} from 'react'
import './projects.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import P1 from '../../assets/P1.jpeg'
import P2 from '../../assets/P2.webp'
import P3 from '../../assets/P3.jpg'
import P4 from '../../assets/P4.jpg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FcInfo } from 'react-icons/fc'
import { BsDot } from 'react-icons/bs'

const Projects = () => {
  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <section id='projects'>
      <h5>My work</h5>
      <h2>Projects</h2>
      
      <div className='container portfolio_container'>
        <article data-aos='fade-up' className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P1} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Connect 4</h3>
          <div className="info">
            <Tippy content={
              <ul>
                <li><BsDot/>Javascript</li>
                <li><BsDot/>CSS</li>
                <li><BsDot/>HTML</li>
              </ul>
            }>
              <span><FcInfo className='info-icon'/></span>
            </Tippy>
          </div>
          <div className='project-btn'>
            <a 
              href="https://github.com/LedioDylgjeri/Connect-4"
              className='btn'
              target="_blank" 
              rel="noopener  noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://connect4-lediod.netlify.app/" 
              className='btn btn-primary project-btn' 
              target="_blank" 
              rel=" noopener noreferrer"
            >
              Deployment
            </a>
          </div>
        </article>
        <article data-aos='fade-up' className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P2} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Fantasy Soccer</h3>
          <div className="info">
            <Tippy content={
              <ul>
                <li><BsDot/>MongoDB</li>
                <li><BsDot/>Mongoose</li>
                <li><BsDot/>Javascript</li>
                <li><BsDot/>Express</li>
                <li><BsDot/>EJS</li>
                <li><BsDot/>CSS</li>
                <li><BsDot/>HTML</li>
              </ul>
            }>
              <span><FcInfo className='info-icon'/></span>
            </Tippy>
          </div>
          <div className='project-btn'>
            <a 
              href="https://github.com/LedioDylgjeri/fantasy-soccer-team"
              className='btn project-btn'
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://fantasy-soccer.fly.dev/" 
              className='btn btn-primary project-btn' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Deployment
            </a>
          </div> 
        </article>
        <article data-aos='fade-up' className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P3} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Food Runner</h3>
          <div className="info">
            <Tippy content={
              <ul>
                <li><BsDot/>MongoDB</li>
                <li><BsDot/>Mongoose</li>
                <li><BsDot/>Express</li>
                <li><BsDot/>React</li>
                <li><BsDot/>Bootstrap</li>
                <li><BsDot/>CSS</li>
                <li><BsDot/>HTML</li>
              </ul>
            }>
              <span><FcInfo className='info-icon'/></span>
            </Tippy>
          </div>
          <div className='project-btn'>
            <a 
              href="https://github.com/LedioDylgjeri/Food-Runner-Front"
              className='btn project-btn'
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://food-runners.netlify.app" 
              className='btn btn-primary project-btn' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Deployment
            </a>
          </div> 
        </article>
        <article data-aos='fade-up' className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P4} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Car Collector</h3>
          <div className='info'>
            <Tippy content={
              <ul>
                <li><BsDot/>PostgreSQL</li>
                <li><BsDot/>Python</li>
                <li><BsDot/>Django</li>
                <li><BsDot/>Docker</li>
                <li><BsDot/>CSS</li>
                <li><BsDot/>HTML</li>
              </ul>
            }>
              <span><FcInfo className='info-icon'/></span>
            </Tippy>
          </div>
            <div className='project-btn'>
            <a 
              href="https://github.com/LedioDylgjeri/car-collector"
              className='btn project-btn' 
              target="_blank" 
              rel="noopener noreferrer"     
            >
              GitHub
            </a>
            <a 
              href="https://c-collector.herokuapp.com/" 
              className='btn btn-primary project-btn' 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Deployment
            </a>
          </div>  
        </article>
      </div>
    </section>
  )
}

export default Projects;