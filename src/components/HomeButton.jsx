import React from 'react'
import homeIcon from '../assets/images/homeIcon.png'
import { useNavigate } from 'react-router-dom'

const HomeButton = () => {
  const navigate = useNavigate();

  function GoHome(){
    navigate('../home')
  }
  
  return (
    <div className='home-btn'>
        <img src={homeIcon} onClick={GoHome} alt="Home" />
    </div>
  )
}

export default HomeButton