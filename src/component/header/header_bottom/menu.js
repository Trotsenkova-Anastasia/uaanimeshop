import React from "react";
import {Link} from 'react-router-dom'
import Info from '../header_top/info'
import Logo from '../header_midle/logo'
import  '../header_bottom/header_bottom.css'
import Search from "../header_midle/search";
import DropdownMenu from './DropdownMenu'

function Menu()
{
    return(
        <>
        <Info/>
        <nav className="top-menu">
        
        <div class="text-wrapper">
        <Link to="/"><Logo/></Link>
        </div>
        <Search/>
        <ul className="menu-main">
            <li> <DropdownMenu/></li>
            <li><Link to="/">Головна</Link></li>
            <li><Link to="/cardProduct">Продукти</Link></li>
            <li><Link to='/contact' >Контакти</Link></li>
            <li><Link to='/deliveryPayment' >Оплата та доставка</Link></li>
            {/* <li><Link to='/admin' >Admin</Link></li> */}
            <li><Link to='/basket' >Корзина</Link></li>
        </ul>
        </nav>

        
        </>
    )
}
export default Menu;