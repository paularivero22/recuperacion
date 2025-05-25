import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TemperatureConverter from './TemperatureConverter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TemperatureConverter />
  </StrictMode>,
)
