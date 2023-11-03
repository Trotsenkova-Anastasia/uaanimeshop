import React from "react";
import Info from '../header/header_top/info'
import Menu from '../header/header_bottom/menu'
import LogoHeader from "../header/header_midle/logo";
import CartHeader from "../header/header_midle/cart";
import Search from "../header/header_midle/search";
import './layout.css'
import Footer from "../footer/footer";
function Layout(props)
{
    return(
        <>
       
        <Menu/>
        <CartHeader/>
    
        
        {props.children}
        <div className="footer">
            <Footer/>
        </div>
        
        </>
    )
}
export default Layout;