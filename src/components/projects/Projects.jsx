import React from 'react'
import './projects.css'
import P1 from '../../assets/P1.jpeg'
import P2 from '../../assets/P2.webp'
import P3 from '../../assets/P3.jpeg'
import P4 from '../../assets/P4.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My work</h5>
      <h2>Projects</h2>
      
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P1} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Connect 4</h3>
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
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P2} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Fantasy Soccer</h3>
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
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P3} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Food Runner</h3>
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
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={P4} alt="Connect 4" className="project-img"/>
          </div>
          <h3>Car Collector</h3>
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