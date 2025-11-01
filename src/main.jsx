import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import 'animate.css';
import Preloader from './component/Preloader.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader/>
    <div className='container mx-auto px-4 '>
    <Navbar/>
    <App />
    <Footer/>
    </div>
  </StrictMode>,
)
