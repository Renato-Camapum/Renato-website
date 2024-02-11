import React from 'react'
import './skills.css'
import proficiency from '../../assets/proficiency.png'
import brainstorm from '../../assets/brainstorming.png'
import eye from '../../assets/eye.png'
import creative from '../../assets/creative.png'
import talk from '../../assets/talk.png'



const Skills = () => {
  return (
    <section id='skills'>
        <h2 className='skill-title'>What I do</h2>
        <span className='skill-description'>I am a skilled and passionate web developer with 3 years of experience creating and maintaining visually appealing websites and webbApps. Here my top 5 qualities. 
        </span>
        <div className='skill-bars'>
            <div className='skill-bar'>
                <img src={proficiency} alt='php logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>Technical Proficiency</h2>
                    <p>A strong understanding of programming languages (such as HTML, CSS, JavaScript, etc.), frameworks, and other tools </p>
                </div>
            </div>
            <div className='skill-bar'>
                <img src={brainstorm} alt='javascript logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>Problem-Solving Skills</h2>
                    <p>Excellent problem-solving skills, the ability to think critically, and troubleshoot efficiently.</p>
                </div>
            </div>
            <div className='skill-bar'>
                <img src={eye} alt='react logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>Attention to Detail</h2>
                    <p> The ability to pay close attention to detail and ensure that code is clean, efficient, and error-free.</p>
                </div>
            </div>
            <div className='skill-bar'>
                <img src={creative} alt='react logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>Creativity</h2>
                    <p> I Can think outside the box to create visually appealing and innovative websites or applications.</p>
                </div>
            </div>
            <div className='skill-bar'>
                <img src={talk} alt='react logo' className='skill-image' />
                <div className='skill-bar-text'>
                    <h2>Communication and Collaboration</h2>
                    <p> Clear communication helps ensure that everyone is on the same page and that projects are completed successfully and efficiently.</p>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Skills