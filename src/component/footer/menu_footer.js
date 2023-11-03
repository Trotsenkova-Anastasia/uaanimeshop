import React from "react";
import {Link} from 'react-router-dom'
import './footer.css'
function MenuFooter()
{
    return(
        <>
            <div className="menuFooter">
                <h1>Меню</h1>
                <ul className="ulFooter">
                    <li><Link to="/">Головна</Link></li>
                    <li><Link to="/cardProduct">Продукти</Link></li>
                    <li><Link to='/cart'>Картка продукту</Link></li>
                    <li><Link to='/contact' >Контакти</Link></li>
                    <li><Link to='/deliveryPayment' >Оплата та доставка</Link></li>
                </ul>
            </div>
        </>
    )
}
export default MenuFooter;