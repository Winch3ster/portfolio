import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import hmaburgerMenu from '../assets/icons/hamburgerMenu.png'
import closeBtn from '../assets/icons/close.png'
const NavigationBar = ({backgroundFill, ...props}) => {

  const [navOpened, setNavOpened] = useState(false);


  if(backgroundFill){
    return (
      <div className='absolute top-0 flex p-2 pt-4 align-middle bg-white z-10  w-full'>
  
          <div style={{width: "30%"}} className=' m-2 mt-2 '>  <Link to={'/'}>Kingston</Link></div>


          <ul className='justify-end align-middle pt-2 pr-10 hidden md:flex lg:flex' style={{width: "70%"}}>
            <li style={{marginRight:'2.5vw'}} > <Link to={'/developer'}>Developer</Link></li>
            <li style={{marginRight:'2.5vw'}}> <Link to={'/arts'}>Arts</Link></li>    
            <li style={{marginRight:'2.5vw'}}><Link to={'/contact-me'}>Contact</Link></li>
          </ul>

          <div className='flex md:hidden lg:hidden float-end justify-end align-middle pr-10' style={{width: "70%", alignItems:'center', cursor: 'pointer'}}>
            <img src={hmaburgerMenu} alt="hamburger menu" style={{height:'30px', width:'30px'}} onClick={() => setNavOpened(true)}/>
          </div>



          <div
            className={`fixed right-0 top-0 h-full w-1/2 bg-gray-100 z-100 overflow-y-auto transition-transform duration-300 ${
              navOpened ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}>
            <div className='flex justify-end mr-5 mt-5'>
              <img src={closeBtn} alt="close" className='' style={{height:'40px', width:'40px', cursor:'pointer'}} onClick={() => setNavOpened(false)}/>
            </div>
            <ul className="px-10 text-start main-color-text">
              
              <li className='my-5 '> <Link to={'/developer'}>Developer</Link></li>
              <li className='my-5'> <Link to={'/arts'}>Arts</Link></li>
              <li className='my-5'><Link to={'/contact-me'}>Contact</Link></li>
            </ul>
          </div>


      </div>
    )
  }else{
    return (
      <div className='absolute top-0 mt-2 flex p-2 align-middle bg-transparent z-10 w-full'>
  
          <div style={{width: "30%"}} className=' m-2 mt-2'><Link to={'/'}>Kingston</Link></div>
  
          <ul className='justify-end align-middle pt-2 pr-10 hidden md:flex lg:flex' style={{width: "70%"}}>
            <li style={{marginRight:'2.5vw'}} > <Link to={'/developer'}>Developer</Link></li>
            <li style={{marginRight:'2.5vw'}}> <Link to={'/arts'}>Arts</Link></li>
            <li style={{marginRight:'2.5vw'}}><Link to={'/contact-me'}>Contact</Link></li>
          </ul>

          <div className='flex md:hidden lg:hidden float-end justify-end align-middle pr-5' style={{width: "70%", alignItems:'center', cursor: 'pointer'}}>
            <img src={hmaburgerMenu} alt="hamburger menu" style={{height:'30px', width:'30px'}} onClick={() => setNavOpened(true)}/>
          </div>



          <div
            className={`fixed right-0 top-0 h-full w-1/2 bg-white z-50 overflow-y-auto transition-transform duration-300 ${
              navOpened ? 'transform translate-x-0' : 'transform translate-x-full'
            }`}>
            <div className='flex justify-end mr-5 mt-5'>
              <img src={closeBtn} alt="close" className='' style={{height:'40px', width:'40px', cursor:'pointer'}} onClick={() => setNavOpened(false)}/>
            </div>
            <ul className="px-10 text-start main-color-text">
              
              <li className='my-5 '> <Link to={'/developer'}>Developer</Link></li>
              <li className='my-5'> <Link to={'/arts'}>Arts</Link></li>
              <li className='my-5'><Link to={'/contact-me'}>Contact</Link></li>
            </ul>
          </div>

      </div>
    )
  }
  
}

export default NavigationBar


//To be added in the future
// /<li style={{marginRight:'2.5vw'}}><Link to={'/developer'}>Hestia</Link></li>