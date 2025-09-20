import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' //create the React app root
import './index.css'
import App from './App.jsx' //main app component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
