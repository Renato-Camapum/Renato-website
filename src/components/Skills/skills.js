import React from 'react'
import './skills.css'
import PhpLogo from '../../assets/php.png'
import ReactLogo from '../../assets/react.png'
import JavaScriptLogo from '../../assets/javascript.png'


const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='skill-title'>What I do</h2>
        <span className='skill-description'>I am a skilled and passionate web developer with 3 years of experience creating and maintaining visually appealing websites and webbApps.  
        </span>
        <div className='skill-bars'>
            <div className='skill-bar'>
                <img src={PhpLogo} alt='php logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>PHP</h2>
                    <p>this is a demo text</p>
                </div>
            </div>
            <div className='skill-bar'>
                <img src={JavaScriptLogo} alt='javascript logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>javascript</h2>
                    <p></p>
                </div>
            </div>
            <div className='skill-bar'>
                <img src={ReactLogo} alt='react logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>React.JS</h2>
                    <p></p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills