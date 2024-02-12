import React, { useRef } from 'react'
import './contact.css'
import php from '../../assets/php.png'
import react from '../../assets/react.png'
import js from '../../assets/javascript.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import python from '../../assets/python.png'
import vue from '../../assets/vue.png'
import mysql from '../../assets/mysql.png'
import instagram from '../../assets/insta.png'
import gitHub from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_tf89vnn', 'template_cx426mt', form.current, {
            publicKey: 'zN5PV81F6U4_5-OYZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email sent! I will be in contact as soon as Possible!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contact-page'>
    <div id="languages">
        <h2 className="languages-title">Languages and Frameworks</h2>
        <sapn className="languages-description">Here some of the Languages and frameworks I use.</sapn>
        <div className="languages-images">
            <img src={php} alt="php" className="languages-image" />
            <img src={react} alt="react" className="languages-image" />
            <img src={js} alt="javascript" className="languages-image" />
            <img src={css} alt="css" className="languages-image" />
            <img src={html} alt="html" className="languages-image" />
            <img src={vue} alt="vue" className="languages-image" />
            <img src={python} alt="python" className="languages-image" />
            <img src={mysql} alt="mysql" className="languages-image" />
        </div>
    </div>
        <div id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <span className="contact-description">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contact-form" ref={form}  onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name='from_name'/>
                <input className='email' type='email' placeholder='Your Email' name='from_email'/>
                <textarea className='message' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='send' className="submit-btn">Submit</button>
                <div className="social-media">
                    <a href='https://www.linkedin.com/in/renato-pinto-de-freitas-camapum/' target='_blank'  rel="noreferrer"> <img src={instagram} alt='' className='social-links' /></a>
                    <a href='https://github.com/Renato-Camapum' target='_blank'  rel="noreferrer"><img src={gitHub} alt='' className='social-links git' /></a>
                    <a href='https://www.instagram.com/renato_camapum/?hl=en' target='_blank'  rel="noreferrer"><img src={linkedin} alt='' className='social-links' /></a>
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact