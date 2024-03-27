import './App.css'
import Arts from './pages/Arts'
import Developer from './pages/Developer'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home'
import Index from './pages/Index'
import Musics from './pages/Musics.jsx'
import ContactMe from './pages/ContactMe.jsx'
import Loader  from './components/Loader.jsx'

import Testart from './pages/Testart.jsx'
import DigitalModelGallery from './pages/DigitalModelGallery.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'

const router = createBrowserRouter([
    {
      path:'/',
      element: <Index/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/developer',
      element: <Developer/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/arts',
      element: <Arts/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/arts/miniatures',
      element: <Gallery/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/arts/guitar',
      element: <Musics/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/arts/digital-modelling',
      element: <DigitalModelGallery/>,
      errorElement: <ErrorPage/>
    },

    {
      path:'/home',
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path:'/contact-me',
      element: <ContactMe/>,
      errorElement: <ErrorPage/>
    }


]);
// /<RouterProvider router={router}></RouterProvider>
const App = () => {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
