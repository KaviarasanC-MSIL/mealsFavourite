import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
export const Header = () => {
    return (<>
        <div className='navbar'>
            <div className='logo'>FoodLogo</div>
            <ul>
                <li>
                    <Link to={"/"} >Home</Link>
                </li>
                <li>
                    <Link to={"favourite"}>Favaroute</Link>
                </li>
            </ul>

        </div>

    </>);
}