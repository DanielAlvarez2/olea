import {Link} from 'react-router'

export default function Manager(){
    return(
        <>
            <h1>Manager</h1>

            <ul>
                <li><Link to='/dinner-menu'>Dinner Menu</Link></li>
                <li>Specials</li>
                <li>Dessert Menu</li>
                <li>Wine List</li>
                <li>Take-Out Menu</li>
                <li>New Year's Eve</li>
                <li>Mothers Day</li>
                <li>Valentine's Day</li>
                <li>Graduation</li>
                <li>Parents Weekend</li>
                <li>Restaurant Week</li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}