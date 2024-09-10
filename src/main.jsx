import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Imgslider from './Imgslider.jsx'
import './index.css'
import Header from './Header.jsx'

import Foooter from './Foooter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Header/>
    <App />
    <Imgslider/>
    <Foooter/>
   
  </StrictMode>,
)
