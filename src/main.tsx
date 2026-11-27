import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DesktopDeviceFrame } from './components/DesktopDeviceFrame.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesktopDeviceFrame>
      <App />
    </DesktopDeviceFrame>
  </StrictMode>,
)
