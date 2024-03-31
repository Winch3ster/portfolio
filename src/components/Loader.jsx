//React drei will convert non 3d elements to eleemnt that can be read by Canvas
import { Html } from '@react-three/drei'
import PropagateLoader from "react-spinners/PropagateLoader";
import HomeButton from './HomeButton';
import loadingIcon from '../assets/images/loadingScreenIcon.png'
import BarLoader from 'react-spinners/BarLoader'
const Loader = () => {
  return (
   <div className='loading-screen flex justify-center'>
    <div >

      <img className='loading-screen-img' src={loadingIcon} alt="" />
      
      <BarLoader
        className='mt-10 ml-auto mr-auto'
        color="#5e5e5e"
        height={5}
        width={250}
      />
      
      <p className='mt-10'>Loading assets...</p>
      <p className='mt-2'>Illustration created using Krita</p>

    </div>
     
      
   </div>
  )
}
//  <p>This is a loading screen from Loader.jsx</p>

export default Loader