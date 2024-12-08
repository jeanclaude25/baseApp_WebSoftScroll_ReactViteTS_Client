import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { NotFound } from './Pages/NotFound'
import { ContentPages } from './Pages/Content'
import './Components/Styles/App.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<ContentPages/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
  </StrictMode>,
)
