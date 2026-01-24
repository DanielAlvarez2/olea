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
import Manager from './Manager/Manager.jsx'
import DinnerMenu from './Manager/DinnerMenu.jsx'
import DessertMenu from './Manager/DessertMenu.jsx'

import ToGoMenu from './Manager/ToGoMenu.jsx'
import TakeoutScan from './Manager/TakeoutMenuScan.jsx'

import AnniversaryScan from './Manager/AnniversaryScan.jsx'
import Anniversary from './Manager/Anniversary.jsx'

import NYE from './Manager/NYE.jsx'
import NYEscan from './Manager/NYEscan.jsx'
import NYEscreenshot from './Manager/NYEscreenshot.jsx'


import SpecialsMenu from './Manager/SpecialsMenu.jsx'
import SpecialsMenuUpdate from './Manager/SpecialsMenuUpdate.jsx'
import SpecialsMenuFormat from './Manager/SpecialsMenuFormat.jsx'
import SpecialsMenuPrint from './Manager/SpecialsMenuPrint.jsx'

import DessertMenuUpdate from './Manager/DessertMenuUpdate.jsx'
import DessertMenuFormat from './Manager/DessertMenuFormat.jsx'
import DessertMenuPrint from './Manager/DessertMenuPrint.jsx'
import DessertsUpdate from './Manager/DessertsUpdate.jsx'
import DessertDrinksUpdate from './Manager/DessertDrinksUpdate.jsx'
import CoffeeUpdate from './Manager/CoffeeUpdate.jsx'
import TeaUpdate from './Manager/TeaUpdate.jsx'

import WineList from './Manager/WineList.jsx'
import Events from './Manager/Events.jsx'
import RestaurantWeeks from './Manager/RestaurantWeeks.jsx'
import RestaurantWeeksScan from './Manager/RestaurantWeeksScan.jsx'
import RestaurantWeeksScreenshot from './Manager/RestaurantWeeksScreenshot.jsx'
import PrinterConfig from './Manager/PrinterConfig.jsx'

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
        <Route path='takeout' element={<ToGoMenu />} />
        <Route path='wine-list' element={<WineList />} />
        <Route path='dessert-menu' element={<DessertMenu />} />
        <Route path='specials-menu' element={<SpecialsMenu />} />
        <Route path='events' element={<Events />} />
        <Route path='printer-config' element={<PrinterConfig />} />
        
        <Route path='specials-menu-update' element={<SpecialsMenuUpdate />} />
        <Route path='specials-menu-format' element={<SpecialsMenuFormat />} />
        <Route path='specials-menu-print' element={<SpecialsMenuPrint />} />

        <Route path='dessert-menu-update' element={<DessertMenuUpdate />} />
        <Route path='desserts-update' element={<DessertsUpdate />} />
        <Route path='dessert-drinks-update' element={<DessertDrinksUpdate />} />
        <Route path='coffee-update' element={<CoffeeUpdate />} />
        <Route path='tea-update' element={<TeaUpdate />} />
        <Route path='dessert-menu-format' element={<DessertMenuFormat />} />
        <Route path='dessert-menu-print' element={<DessertMenuPrint />} />



        <Route path='restaurant-weeks' element={<RestaurantWeeks />} />
        <Route path='restaurant-weeks-screenshot' element={<RestaurantWeeksScreenshot />} />
        <Route path='restaurant-weeks-scan' element={<RestaurantWeeksScan />} />
        
        <Route path='takeout-scan' element={<TakeoutScan />} />

        <Route path='anniversary-scan' element={<AnniversaryScan />} />
        <Route path='anniversary' element={<Anniversary />} />
        
        <Route path='nye' element={<NYE />} />
        <Route path='nye-scan' element={<NYEscan />} />
        <Route path='nye-screenshot' element={<NYEscreenshot />} />


      </Routes>
    </BrowserRouter>
  </StrictMode>
)
