import React from 'react'
// import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { SiUpwork } from "react-icons/si";

// import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> */}
    <a href="https://upwork.com/freelancers/~0165719fb0b09ae02d?mp_source=share" target="_blank"><SiUpwork/></a>
    <a href="https://github.com/rameezr729" target="_blank"><FaGithub/></a>
    {/* <a href="https://dribble.com" target="_blank"><FiDribbble/></a> */}
    </div>
  )
}

export default HeaderSocials