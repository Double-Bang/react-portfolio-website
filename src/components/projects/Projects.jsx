import React from 'react'
import './projects.css'
import Github from '..//../assets/github.png'
import Titan from '..//..//assets/titan.png'
import Animations from '..//..//assets/animations.gif'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
  return (
  <section id='projects'>
    <h5>What Have I Worked On?</h5>
    <h2>Portfolio</h2>
    <Swiper 
    className='container projects__container'
    // install Swiper modules
    modules={[ Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}>

      <SwiperSlide className='project'>
        <div className='project__image'>
          <img src={Github} alt="An animated logo" />
        </div>
          <h2 className='project__name'>My GitHub</h2>
          <small className='project__details'>
            Vist my <a href='https://github.com/Double-Bang' target='blank'>GitHub</a> to view the code for this web page as well as all my current and future projects. 
          </small>
      </SwiperSlide>


      <SwiperSlide className='project'>
        <div className='project__image'>
          <img src={Titan} alt="Graphics designed for Titan Movers." />
        </div>
          <h2 className='project__name'>Titan Movers</h2>
          <small className='project__details'>
            I'm proud to have worked with the moving company <a href='https://titanmovers.ca' target='blank'>Titan Movers</a>. I created their logo and graphics using Adobe Photoshop and Adobe Illustrator.
          </small>
      </SwiperSlide>


      <SwiperSlide className='project'>
        <div className='project__image'>
          <img src={Animations} alt="Several animated logos made by Amin Aliyarzadeh" />
        </div>
          <h2 className='project__name'>Animations</h2>
          <small className='project__details'>
            Animated icons and graphics for social groups, indivdual clients, video game assets, and more. I can help you design your logo or icons from scratch!
          </small>
      </SwiperSlide>

      

    </Swiper>
  </section> )



}

export default Projects