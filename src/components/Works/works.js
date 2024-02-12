import React from 'react'
import './works.css'
import memory from '../../assets/memory-game.png'
import tindog from '../../assets/tindogs.png'
import landing from '../../assets/landing-page.png'

const Works = () => {
  return (
    <section id='works'>
       <h2 className="works-title">My Portfolio</h2>
       <sapn className="works-description">Explore my portfolio for a glimpse into my web development journey. Discover diverse projects showcasing creativity, and user-centric design.</sapn>
       <div className="works-images">
        <a href='https://tilt-memory-game.netlify.app/' target='_blank' rel="noreferrer"><img src={memory} alt="" className="works-image" /></a>
        <a href='https://renato-bootstrap.netlify.app/' target='_blank' rel="noreferrer"><img src={tindog} alt="" className="works-image" /></a>
        <a href='https://renato-landing-page.netlify.app/' target='_blank' rel="noreferrer"><img src={landing} alt="" className="works-image" /></a>
       </div>
       <btn className="works-btn"><a href='https://github.com/Renato-Camapum' target='_blank'  rel="noreferrer">See More</a></btn>
    </section>
  )
}

export default Works