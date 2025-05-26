import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserFilter from './UserFilter.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserFilter />
  </StrictMode>,
)
