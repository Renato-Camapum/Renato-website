import React, { useRef } from 'react'
import './contact.css'
import php from '../../assets/php.png'
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
              alert('Email sent!')
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
  return (
    <section id='contact-page'>
    <div id="languages">
        <h2 className="languages-title">Languages and FrameWorks</h2>
        <sapn className="languages-description">Here some of the Languages and framewors I use.</sapn>
        <div className="languages-images">
            <img src={php} alt="" className="languages-image" />
            <img src={php} alt="" className="languages-image" />
            <img src={php} alt="" className="languages-image" />
            <img src={php} alt="" className="languages-image" />
            <img src={php} alt="" className="languages-image" />
            <img src={php} alt="" className="languages-image" />
        </div>
    </div>
        <div id="contact">
            <h2 className="contact-title">Contact Me</h2>
            <span className="contact-description">PLease fill out the form bellow to discuss any work opportunities.</span>
            <form className="contact-form" ref={form}  onSubmit={sendEmail}>
                <input className='name' type='text' placeholder='Your Name' name='from_name'/>
                <input className='email' type='email' placeholder='Your email' name='from_email'/>
                <textarea className='message' name='message' rows='5' placeholder='Your Message' />
                <button type='submit' value='send' className="submit-btn">Submit</button>
                <div className="social-media">
                    <img src={instagram} alt='' className='social-links' />
                    <img src={gitHub} alt='' className='social-links git' />
                    <img src={linkedin} alt='' className='social-links' />
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact