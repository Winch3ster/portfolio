import React, {useEffect} from 'react'
import NavigationBar from '../components/NavigationBar'
import linkedin from '../assets/icons/linkedin.png'
import githubLogo from '../assets/icons/github.png'


import csharp from '../assets/images/languages/c-sharp.png'
import js from '../assets/images/languages/js.png'
import java from '../assets/images/languages/java.png'
import python from '../assets/images/languages/python.png'
import php from '../assets/images/languages/php.png'
import r from '../assets/images/languages/r.png'

import bitsey from '../assets/images/developer/bitsey.png'
import HomeButton from '../components/HomeButton'
//import profile from '../assets/images/languages/portfolioProfile.jpg'
import { useNavigate } from "react-router-dom";

import {codingProjects} from '../assets/constant/developer.js'

const Developer = () => {
    const screenSize = window.innerWidth
   
    const navigate = useNavigate();
    function navigateToContactMe(){
        navigate('../contact-me')
    }

    function navigateToGithub(link){
        window.open(link )
    }

    function navigateTolinkedIn(){
        window.open('https://www.linkedin.com/in/kingston-lee-134bb2209/')
    }

    function navigateToGithubAccount(){
        window.open('https://github.com/Winch3ster')
    }

    const scrollToWorkspace = () => {
        const section = document.getElementById('workspace');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {

        const hiddenElements = document.querySelectorAll('.hidden-element')


        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if(entry.target.classList.contains('title')){
                if (entry.isIntersecting) {
                    entry.target.classList.add('digital-miniature-title');
                }
            }else{
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }else{
                    entry.target.classList.remove('fade-in');
                }
            }
            
          });
        });
    
       hiddenElements.forEach((el) => observer.observe(el))
    
       
      }, []);

  return (
    <>
        <NavigationBar backgroundFill={true}></NavigationBar>

        <div className='bg-gray-100 h-fit pt-32 pb-20 md:mb-0 lg:mb-0'>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-10 px-14 mt-5 md:mt-20 lg:mt-20 mb-10">

                <div className=' w-1/4  ml-10'>
                    <img className='profile-pic' src={''} alt="" />
                </div>

                <div className='text-start'>
                    <h1 className='font-bold title-text'>Computer Science Student 👋</h1>
                    <p className='my-5'><span style={{color:"rgb(3, 139, 165)", fontSize:"24px"}}>Hi, I'm Kingston Lee.</span> A passionate third year computer science bachelor student based in Malaysia.</p>
                    <div className='flex'>
                        <img className="individual-icon mr-5" src={linkedin}  alt="linkedin" onClick={navigateTolinkedIn} />
                        <img className="individual-icon" src={githubLogo} alt="github" onClick={navigateToGithubAccount} />
                        
                    </div>

                    <button className='workspace-btn my-5 mr-10' onClick={scrollToWorkspace}>My workspace</button>

                    <button className='contact-me-btn my-5' onClick={navigateToContactMe}>Contact me</button>

                </div>

                

            </div>
                


            <div className='hidden md:block lg:block' style={{marginLeft:'21vw'}}>
                
                <div className='flex ' style={{alignItems:"center"}}>
                    <p className='text-left mr-16 font-bold'>Programming language |</p>
                    <div className='flex'>
                       
                        <img className='programming-lang-icon' src={csharp} alt=""/>
                        <img className='programming-lang-icon' src={java} alt=""/>
                        <img className='programming-lang-icon' src={js} alt=""/>
                        <img className='programming-lang-icon' src={python} alt=""/>
                        <img className='programming-lang-icon' src={php} alt=""/>
                        <img className='programming-lang-icon' src={r} alt=""/>
                    </div>
                </div>
            </div>


            <div className='block md:hidden lg:hidden' >
                <p className='font-bold mb-10'>Programming languages</p>
                
                    
                <div className='grid grid-cols-4 w-5/6 gap-y-5 m-auto'>
                    
                    <img className='programming-lang-icon' src={csharp} alt=""/>
                    <img className='programming-lang-icon' src={java} alt=""/>
                    <img className='programming-lang-icon' src={js} alt=""/>
                    <img className='programming-lang-icon' src={python} alt=""/>
                    <img className='programming-lang-icon' src={php} alt=""/>
                    <img className='programming-lang-icon' src={r} alt=""/>
                </div>
                
            </div>


        </div>



        {/*Project work space */}
        <div className='w-full py-20 px-10 md:px-40 lg:px-40' id='workspace'>

            {/* Project workspace introduction */}
            <div className='project-pill-frame'>
                My Projects
            </div>

            <div className='hidden-element title'>
                <h1 className='project-page-title '>A Portfolio of Software Development Adventures</h1>
             
            </div>

          
  
            {/* Workspace project list */}
            <div className='w-full h-fit hidden lg:block'>
                
                {codingProjects.map((project) => (
                    <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 gap-y-10 my-20 hidden-element' style={{borderRadius:'20px'}}>
                    
                        {project.imageOnLeft ? 
                        <>
                           
                           <div className='flex w-full h-full float-start lg:float-end' style={{alignItems:'center'}}>
                                <img className='rounded' src={project.image} alt="" />
                            </div>

                            <div className='text-left' >
                                <h1 className='sub-header mb-5'><span className='main-color-text'>{project.companyName}</span> {project.name}</h1>
                                <div className='project-pill-frame mb-5 '>{project.type}</div>
                                <p className='soft-dark-text'>
                                    {project.description}
                                </p>
                                <button className='workspace-btn my-5' onClick={() => navigateToGithub(project.githubLink)}>Github &#x2192;</button>
                            </div>
                            

                            
                        </>
                        : 
                        <>

               
                            
                            <div className='text-left' >
                                <h1 className='sub-header mb-5'><span className='main-color-text'>{project.companyName}</span> {project.name}</h1>
                                <div className='project-pill-frame mb-5 '>{project.type}</div>
                                <p className='soft-dark-text'>
                                    {project.description}
                                </p>
                                <button className='workspace-btn my-5' onClick={() => navigateToGithub(project.githubLink)}>Github &#x2192;</button>
                            </div>

                           
                            
                            <div className='flex w-full h-full' style={{alignItems:'center'}}>
                                <img className='rounded' src={project.image} alt="" />
                            </div>
                            
                           
                        </>
                        
                        }
                        

                    </div>

                ))}

                </div>


                {/* Workspace project list 
                */}
                <div className='w-full h-fit block lg:hidden'>
                                
                {codingProjects.map((project) => (
                    <div className=' grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 gap-y-10 my-20 hidden-element' style={{borderRadius:'20px'}}>
                    
                       
                           
                        <div className='flex w-full h-full float-start lg:float-end' style={{alignItems:'center'}}>
                            <img className='rounded' src={project.image} alt="" />
                        </div>

                        <div className='text-left' >
                            <h1 className='sub-header mb-5'><span className='main-color-text'>{project.companyName}</span> {project.name}</h1>
                            <div className='project-pill-frame mb-5 '>{project.type}</div>
                            <p className='soft-dark-text'>
                                {project.description}
                            </p>
                            <button className='workspace-btn my-5' onClick={() => navigateToGithub(project.githubLink)}>Github &#x2192;</button>
                        </div>

                    </div>

                ))}

                </div>


                <div className='hidden-element'>
                    <div className='flex w-full h-full md:col-span-2 lg:col-span-2' style={{alignItems:'center', paddingBottom:'2.5rem'}}>
                        <img className='rounded' src={bitsey} alt="" />
                    </div>
                    <div className='text-left' >
                        <h1 className='sub-header mb-5'><span className='main-color-text'>Bitsey Studio</span> E-commerce Website</h1>
                        <div className='project-pill-frame mb-5 '>E-commerce Concept</div>
                        <p className='soft-dark-text'>
                        Bitsey Studio is a hypothetical e-commerce website designed by me as a part of my web development assignment. 
                        However, I have expanded the idea into a game development company similar to EA and Ubisoft.
                        </p>
                        <button className='workspace-btn my-5' onClick={() => navigateToGithub("https://github.com/Winch3ster/Bitsey-2")}>Github &#x2192;</button>
                    </div>

                </div>

            </div>

        <div className='hidden lg:block'>
            <HomeButton></HomeButton>
      </div>   
    </>
  )
}

export default Developer