import React from 'react'
import linkedinLogo from '../assets/icons/linkedin.png'
import instagramLogo from '../assets/icons/instagram.png'
import twitterLogo from '../assets/icons/twitter.png'
import NavigationBar from '../components/NavigationBar.jsx'

const ContactMe = () => {

    function navigateToInstagram(){
        window.open('https://www.instagram.com/king_st0ne/')
    }

    function navigateToLinkedIn(){
        window.open('https://www.linkedin.com/in/kingston-lee-134bb2209/')
    }

    function navigateToX(){
        window.open('https://twitter.com/Kingsto32692802')
    }


    return (
    <>
        <NavigationBar></NavigationBar>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-10 px-14 py-10 soft-dark-text" style={{paddingTop:'15vw', paddingBottom:'10vw'}}>
            
            <div className='text-left'>
                <h1 className='title-text main-color-text'>Contact me</h1>
                <p>
                    Feel free to contact me anytime whenever you have question. 
                    You can also reach me via the social media links below.
                </p>

                <div>
                    <p className='mt-10'>My social media links</p>
                    <div className='flex w-1/2 justify-start mt-5'>
                    <img className='individual-icon mr-10' src={instagramLogo} onClick={navigateToInstagram} alt="instagram" />
                    <img className='individual-icon mr-10' src={linkedinLogo} onClick={navigateToLinkedIn} alt="linkedin" />
                    <img className='individual-icon' src={twitterLogo} onClick={navigateToX} alt="x" />
                </div>
            </div>

        </div>

        <div className=' contact-me-form-container text-left pb-10'>
            <form action="">
                <label className="turquoise-label" for="name">Name</label> <br />
                <input className='minimalistic-field mb-5' type="text" id="name" name="name"/><br />

                <label className="turquoise-label" for="email">Email</label><br />
                <input className='minimalistic-field mb-5' type="email" id="emailField" name="email"/><br />

                <label className="turquoise-label" for="message">Message</label><br />
                <textarea className='minimalistic-field text-area mb-10' name="message" id="messageField" ></textarea><br />

                <div className='rounded px-10 py-2 primary-blue-bg w-fit' id="submit-btn-container"><button style={{color:'white'}}>Submit</button></div>

            </form>       
        </div>

        </div>
    </>
    )
}

export default ContactMe