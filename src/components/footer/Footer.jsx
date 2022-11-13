import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
    return (
        <footer>
            {/* <a href="#" className="footer__logo">FANTAHUN FEKADU</a> */}
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Skills</a></li>
                <li><a href="#services">Experience</a></li>
                {/* <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li> */}
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://m.me/belayihun.arage" target='_blank'> <FaFacebookF/> </a>
                <a href="https://www.instagram.com/_belayhun/" target='_blank'> <FiInstagram/></a>
                <a href="https://twitter.com/belayhun_arage" target='_blank'> <IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Belayhun Arage. All rights reserved</small>
            </div>
        </footer>

    )
}

export default Footer
