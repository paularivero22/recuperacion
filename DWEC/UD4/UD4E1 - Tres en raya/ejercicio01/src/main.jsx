import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './TresEnRaya.css'
import TresEnRaya from './TresEnRaya.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TresEnRaya />
  </StrictMode>,
)
