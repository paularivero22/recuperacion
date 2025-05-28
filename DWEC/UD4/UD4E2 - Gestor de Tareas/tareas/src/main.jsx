import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListaTareas from './ListaTareas.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListaTareas />
  </StrictMode>,
)
