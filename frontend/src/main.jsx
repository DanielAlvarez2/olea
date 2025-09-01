import React from 'react'
import {BrowserRouter, Routes,Route} from 'react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Test from './Test.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='test' element={<Test />} />
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>,
)
