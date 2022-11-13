import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return (
        <section id='services'>
            <h5>Where I Have Worked</h5>
            <h2>Experience</h2>

            <div className="container services__container">
            <article className="service">
                    <div className="service__head">
                    <h3>Ministry of Innovation and Technology MINT - Addis Ababa, Ethiopia</h3>
                        <h3>Web Developer</h3>
                        <h3>May 2021 - Sep 2021 </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Built React JS project.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Designed user interface components for web apps</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Worked on different frameworks in collaboration with team members</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Deployed web app to cloud infrastructures</p>
                    </ul>
                    {}
                </article>
                <article className="service">
                    <div className="service__head">
                    <h3>Back To School Ethiopia</h3>
                        <h3>Back-End Developer </h3>
                        <h3>Oct 2021 - Dec 2021 </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Built back-end for a website using NodeJS.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Designed database schema</p>
                    </ul>
                
                    {}
                </article>
                <article className="service">
                    <div className="service__head">
                        <h3>Etech S.C</h3>
                        <h3>Angular Developer</h3>
                        <h3>Aug 2022 - Sep 2022 </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Developed an angular web app</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Designed user interface components for the web app.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Integrated with back end </p>
                    </ul>
                    {}
                </article>
                <article className="service">
                    <div className="service__head">
                    <h3>Santim Pay Financial Solution</h3>
                        <h3>Front End Developer</h3>
                        <h3>Sep 2022 - Present </h3>
                    </div>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Disigning UI for a website using VueJS</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Disigning admin pannel for a website using VueJS</p>
                    </ul>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Integrating front-end components with back end api's UI for a website using VueJS</p>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                    <h3>Monster India</h3>
                        <h3>Virtually assisting VueJS students</h3>
                        <h3>Sep 2022 - Present </h3>
                    </div>

                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Assisting students on the road map for VueJS</p>
                    </ul>
                </article>
                <article className="service">
                    <div className="service__head">
                    <h3>Contract and Private</h3>
                        <h3>Built a web gis based site </h3>
                        <h3>Sep 2021 -  Dec 2021 </h3>
                    </div>
                    
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>Implemented web gis, geo server, geo location and geo distance.</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>It can help tourists to find historical places and their shortest route with estimated time</p>
                    </ul>
                    <ul className='service__list'>
                        <li><BiCheck className='service__list-icon'/></li>
                        <p>It is location based and in Addis Ababa Ethiopia</p>
                    </ul>
                </article>
                {/* END OF Web Development */}
            </div>


        </section>
    )
}

export default Services
