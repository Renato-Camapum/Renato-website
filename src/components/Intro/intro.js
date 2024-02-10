import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import picture from '../../assets/renato.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='intro-content'>
            <span className='hello'>Hello,</span>
            <span className='intro-text'>I'm <span className='intro-name'>Renato</span> <br/>web developer.</span>
            <p className='intro-paragraph'>Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
            <a href='../../assets/Renato-cv.pdf' download='Renato-cv.pdf'><button className='cv-btn'><i class="fa-solid fa-file-arrow-down"></i>Download CV</button></a>
        </div>
        <img src={picture} alt='' className='bg-picture' />
    </section>
  )
}

export default Intro
