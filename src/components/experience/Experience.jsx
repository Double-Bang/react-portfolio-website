import React from 'react'
import './experience.css'

import {SiJavascript} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {SiTypescript} from 'react-icons/si'
import {SiAdobephotoshop} from 'react-icons/si'
import {SiAdobeillustrator} from 'react-icons/si'
import {SiAdobeaftereffects} from 'react-icons/si'
import {SiBlender} from 'react-icons/si'


const Experience = () => {
  return (<section id='experience'>
    <h5>What Can I Do?</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__software'>
      <h3>Software Development</h3>
      <div className='experience__content'>
        <article className='experience__details'>
          <SiJavascript className='experience__details-icon'/>
          <div>
          <h4>JavaScript</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <FaHtml5 className='experience__details-icon'/>
          <div>
          <h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <FaCss3 className='experience__details-icon'/>
          <div>
          <h4>CSS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          <FaReact className='experience__details-icon'/>
          <div>
          <h4>React</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <FaNodeJs className='experience__details-icon'/>
          <div>
          <h4>NodeJS</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          <SiTypescript className='experience__details-icon'/>
          <div>
          <h4>TypeScript</h4>
          <small className='text-light'>Learning</small>
          </div>
        </article>
        </div>
      </div>
      
      <div className='experience__graphic'>
        <h3>Graphic Design</h3>
        <div className='experience__content'>
        <article className='experience__details'>
          <SiAdobephotoshop className='experience__details-icon'/>
          <div>
          <h4>Photoshop</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <SiAdobeillustrator className='experience__details-icon'/>
          <div>
          <h4>Illustrator</h4>
          <small className='text-light'>Experienced</small>
          </div>
        </article>

        <article className='experience__details'>
          <SiAdobeaftereffects className='experience__details-icon'/>
          <div>
          <h4>After Effects</h4>
          <small className='text-light'>Intermediate</small>
          </div>
        </article>

        <article className='experience__details'>
          <SiBlender className='experience__details-icon'/>
          <div>
          <h4>Blender</h4>
          <small className='text-light'>Learning</small>
          </div>
        </article>
        </div>
      </div>
    </div>
  </section> )
}

export default Experience