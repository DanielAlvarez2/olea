import {BrowserRouter, Routes,Route} from 'react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
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
  </StrictMode>
)
