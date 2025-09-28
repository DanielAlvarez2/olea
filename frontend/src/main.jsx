import {BrowserRouter, Routes,Route} from 'react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './Home.jsx'
import Newsletter from './Newsletter.jsx'
import Giftcards from './Giftcards.jsx'
import Info from './Info.jsx'
import FreeParking from './FreeParking.jsx'
import ChefBio from './ChefBio.jsx'
import PrivateParties from './PrivateParties.jsx'
import Dinner from './Dinner.jsx'
import Specials from './Specials.jsx'
import Dessert from './Dessert.jsx'
import Press from './Press.jsx'
import Jobs from './Jobs.jsx'
import Manager from './components/Manager/Manager.jsx'
import DinnerMenu from './components/Manager/DinnerMenu.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='info' element={<Info />} />
        <Route path='free-parking' element={<FreeParking />} />
        <Route path='chef-bio' element={<ChefBio />} />
        <Route path='private-parties' element={<PrivateParties />} />
        <Route path='dinner' element={<Dinner />} />
        <Route path='specials' element={<Specials />} />
        <Route path='dessert' element={<Dessert />} />
        <Route path='newsletter' element={<Newsletter />} />
        <Route path='giftcards' element={<Giftcards />} />
        <Route path='press' element={<Press />} />
        <Route path='jobs' element={<Jobs />} />

        <Route path='manager' element={<Manager />} />
        <Route path='dinner-menu' element={<DinnerMenu />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
