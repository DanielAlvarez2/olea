import {Link} from 'react-router'
import './ManagerApp.css'
import ManagerNavbar from './components/ManagerNavbar.jsx'

export default function Manager(){
    return(
        <>
            <div className='manager-page-wrapper'>
                <ManagerNavbar />
                <h1>Manager</h1>

                <ul>
                    <li><Link to='/dinner-menu'>Dinner Menu</Link></li>
                    <li><Link to='/specials-menu'>Specials</Link></li>
                    <li><Link to='/dessert-menu'>Dessert Menu</Link></li>
                    <li>Wine List</li>
                    <li><Link to='/takeout'>Take-Out Menu</Link></li>
                    <li>New Year's Eve</li>
                    <li>Mothers Day</li>
                    <li>Valentine's Day</li>
                    <li>Graduation</li>
                    <li>Parents Weekend</li>
                    <li>Restaurant Week</li>
                    <li></li>
                    <li></li>
                </ul>
            
            </div>{/* .manager-page-wrapper */}
        </>
    )
}