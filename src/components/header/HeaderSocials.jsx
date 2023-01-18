import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/amin-aliyarzadeh-34a485262/' target='blank'><BsLinkedin/></a>
        <a href='https://github.com/Double-Bang' target='blank'><BsGithub/></a>
        <a href='https://www.youtube.com/channel/UCZeuntFXxjv9rjpmsg-O2yQ' target='blank'><BsYoutube/></a>
    </div>
  )
}

export default HeaderSocials