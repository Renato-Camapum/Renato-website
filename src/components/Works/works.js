import React from 'react'
import './works.css'
import card from '../../assets/card.png'

const Works = () => {
  return (
    <section id='works'>
       <h2 className="works-title">My Portifolio</h2>
       <sapn className="works-description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut interdum augue, sit amet dignissim justo. Aenean efficitur hendrerit ornare. </sapn>
       <div className="works-images">
        <img src={card} alt="" className="works-image" />
        <img src={card} alt="" className="works-image" />
        <img src={card} alt="" className="works-image" />
        <img src={card} alt="" className="works-image" />
        <img src={card} alt="" className="works-image" />
        <img src={card} alt="" className="works-image" />
       </div>
       <bt className="works-btn">See More</bt>
    </section>
  )
}

export default Works