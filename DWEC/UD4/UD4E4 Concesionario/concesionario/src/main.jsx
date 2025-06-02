import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppEnrutador from './routers/AppEnrutador.jsx'
import { SeguridadProvider } from "./context/SeguridadProvider.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeguridadProvider>
      <AppEnrutador />
    </SeguridadProvider>
  </StrictMode>,
)
