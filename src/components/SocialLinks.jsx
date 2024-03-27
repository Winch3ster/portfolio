import React from 'react'
import twitterLogo from '../assets/icons/twitter.png'
import instagramLogo from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import githubLogo from '../assets/icons/github.png'


const SocialLinks = () => {
  return (
    <div className='absolute bottom-0 w-1/2  py-10 z-10'>
     
        <ul className='flex justify-evenly '>
          <li><img className="individual-icon" src={twitterLogo} alt="" /></li>
          <li><img className="individual-icon" src={instagramLogo} alt="" /></li>
          <li><img className="individual-icon" src={linkedin} alt="" /></li>
          <li><img className="individual-icon" src={githubLogo} alt="" /></li>
        </ul>
     </div>

  )
}

export default SocialLinks