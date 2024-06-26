import React from 'react'
import './about.css'
import ME from '../../assets/new.png';
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>5+ Year Working</small>
            </article>
            <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>100+ Worldwide</small>
            </article>
            <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>200+ Projects</small>
            </article>
      </div>

            <p>
            This is Rameez, A Full Stack Developer with over 5 years of hands-on experience in creating and maintaining web applications. My expertise spans across both front-end and back-end technologies, ensuring a comprehensive approach to web development.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div> 
        </div>
    </section>
  )
}

export default about
