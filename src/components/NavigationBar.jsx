import React from 'react'
import { Link } from 'react-router-dom'
const NavigationBar = ({backgroundFill, ...props}) => {

  if(backgroundFill){
    return (
      <div className='absolute top-0 flex p-2 pt-4 align-middle bg-white z-10  w-full'>
  
          <div style={{width: "30%"}} className=' m-2 mt-2 '>  <Link to={'/'}>Kingston</Link></div>
  
          <ul className='flex justify-end align-middle pt-2 pr-10' style={{width: "70%"}}>
            <li style={{marginRight:'2.5vw'}} > <Link to={'/developer'}>Developer</Link></li>
            <li style={{marginRight:'2.5vw'}}> <Link to={'/arts'}>Arts</Link></li>    
            <li style={{marginRight:'2.5vw'}}><Link to={'/contact-me'}>Contact</Link></li>
          </ul>
      </div>
    )
  }else{
    return (
      <div className='absolute top-0 mt-2 flex p-2 align-middle bg-transparent z-10  w-full'>
  
          <div style={{width: "30%"}} className=' m-2 mt-2'><Link to={'/'}>Kingston</Link></div>
  
          <ul className='flex justify-end align-middle pt-2 pr-10' style={{width: "70%"}}>
            <li style={{marginRight:'2.5vw'}} > <Link to={'/developer'}>Developer</Link></li>
            <li style={{marginRight:'2.5vw'}}> <Link to={'/arts'}>Arts</Link></li>
            <li style={{marginRight:'2.5vw'}}><Link to={'/contact-me'}>Contact</Link></li>
          </ul>
      </div>
    )
  }
  
}

export default NavigationBar


//To be added in the future
// /<li style={{marginRight:'2.5vw'}}><Link to={'/developer'}>Hestia</Link></li>