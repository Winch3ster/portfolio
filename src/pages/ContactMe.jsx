import React, {useState, useRef} from 'react'
import linkedinLogo from '../assets/icons/linkedin.png'
import instagramLogo from '../assets/icons/instagram.png'
import twitterLogo from '../assets/icons/twitter.png'
import NavigationBar from '../components/NavigationBar.jsx'
import Alert from '../components/Alert.jsx'
import emailjs from '@emailjs/browser'


const useAlert = () => {
    const [alert, setAlert] = useState({show: false, text: '', type:'danger' })


    const showAlert = ({text, type = 'danger'}) => {
        setAlert({show: true, text, type})
    }


    const hideAlert = () => 
        setAlert({show: false, text: '', type:'danger'})




  return {alert, showAlert, hideAlert}
}




const ContactMe = () => {
    const { alert, showAlert, hideAlert} = useAlert();
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null)

    
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //Do not reload the page
        setIsLoading(true);

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Kingston",
                from_email: form.email,
                to_email: "kingstonlee96@gmail.com",
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            setForm({name: '', email: '', message: ''})
            showAlert({show:true, text:'Message sent succesfully!', type:'success'});


            setTimeout(() => {
                hideAlert();
               
                setForm({name: '', email: '', message: ''});
              }, [3000])

        }).catch((error) => {
            setIsLoading(false);
            console.log(error)
            showAlert({show:true, text:'Message sent failed', type:'danger'});
        })
    }
  
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
        {alert.show && <Alert {...alert}/>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 gap-y-10 px-7 md:px-14 lg:px-14 py-10 soft-dark-text mt-6 md:mt-0 lg:mt-0" style={{paddingTop:'15vw', paddingBottom:'10vw'}}>
            
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
            <form onSubmit={handleSubmit}>
                <label className="turquoise-label" for="name">Name</label> <br />
                <input className='minimalistic-field mb-5 w-full md:w-5/6' type="text" id="name" name="name" value={form.name} onChange={handleChange} required/><br />

                <label className="turquoise-label" for="email">Email</label><br />
                <input className='minimalistic-field mb-5 w-full md:w-5/6' type="email" id="emailField" name="email" value={form.email} onChange={handleChange} required/><br />

                <label className="turquoise-label" for="message">Message</label><br />
                <textarea className='minimalistic-field text-area mb-10 w-full md:w-5/6' name="message" id="messageField" value={form.message} onChange={handleChange} required></textarea><br />

                <div className='rounded px-10 py-2 primary-blue-bg w-fit' id="submit-btn-container"><button type='submit' style={{color:'white'}}>{isLoading ? 'Sending...' : 'Send Message'}</button></div>

            </form>       
        </div>

        </div>
    </>
    )
}

export default ContactMe