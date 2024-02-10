import React, { useState } from 'react';
import './navbar.css';
import scrable from '../../assets/scrable.png'
import contactImg from '../../assets/contactImg.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className='navbar'>
        <img src={scrable} alt='logo' className='logo'/>
        <div className='desktop-menu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-70} duration={500} className='desktop-menu-item'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-20} duration={500} className='desktop-menu-item'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-10} duration={500} className='desktop-menu-item'>Portifolio</Link>
            <Link activeClass='active' to='languages' spy={true} smooth={true} offset={-70} duration={500} className='desktop-menu-item'>Skills</Link>
        </div>
        <button className='desktop-menu-btn' offset={-70} onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt='' className='desktop-menu-img' /> Contact Me
        </button>
        <i class="fa-solid fa-bars"  onClick={()=>setShowMenu(!showMenu)}></i>
        <div className='burger-menu' style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-60} duration={500} className='menu-item' onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} duration={500} className='menu-item' onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} duration={500} className='menu-item' onClick={()=>setShowMenu(false)}>Portifolio</Link>
            <Link activeClass='active' to='languages' spy={true} smooth={true} offset={-60} duration={500} className='menu-item' onClick={()=>setShowMenu(false)}>Skills</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-60} duration={500} className='menu-item' onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>  
    </nav>
  )
}

export default Navbar