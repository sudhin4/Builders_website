import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './component/Header.jsx'
import Mainsection from './component/Mainsection.jsx'
import TestimonialComponent from './component/Testimonialcomponent.jsx'
import Lastproject from './component/LastProjects.jsx'
import Aboutussection from './component/Aboutus.jsx'
import Contactsection from './component/Contactsection.jsx'
import Footer from './component/footer.jsx'
import Rain from './component/Rain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
