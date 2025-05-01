import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cv from './cv.jsx' // Ensure proper import

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cv /> {/* Correct capitalization */}
  </StrictMode>,
)
