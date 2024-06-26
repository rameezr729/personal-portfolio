import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/me.png'
import ME from '../../assets/image11.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Rameez Raza</h1>
      <h5 className="text-light">An Experienced Software Engineer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
      <img src={ME} alt="me" className='rameez__img'/>
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
      </header>
  )
}

export default Header