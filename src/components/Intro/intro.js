import React from 'react'
import './intro.css'
import picture from '../../assets/developer-pixel.png'

const Intro = () => {
  return (
    <section id='intro'>
     <img src={picture} alt='' className='bg-picture' />
        <div className='intro-content'>
            <span className='hello'>Hello,</span>
            <span className='intro-text'>I'm <span className='intro-name'>Renato,</span> <br/> a web developer.</span>
            <p className='intro-paragraph'>Commited web developer passionate about crafting elegant solutions and enhancing user experiences through innovative design and seamless functionality.</p>
            <a href='./Renato-cv.pdf' download><button className='cv-btn'><i class="fa-solid fa-file-arrow-down"></i>Download CV</button></a>
        </div>
       
    </section>
  )
}

export default Intro
