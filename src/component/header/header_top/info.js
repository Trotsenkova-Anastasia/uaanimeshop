import React from "react";
import  './header_top.css'
import {Link} from 'react-router-dom'
import linkedIn from '../../../images/in.png'
import youtube from '../../../images/youtube.png'
import twitter from '../../../images/twitter.png'
import instagram from '../../../images/instagram.png'
import facebook from '../../../images/facebook.png'
function Info()
{
    return(
        <>
        <div className="info">
            <a href="">FAQs</a>|<a href="">Help</a>|<a href="">Support</a>|
            <a href="">UA Anime Shop</a>
           
            <Link to='/admin'className="aut">Admin</Link>

            <a href=""><img src={linkedIn} /></a>
            <a href=""><img src={youtube}/></a>
            <a href=""><img src={twitter}/></a>
            <a href=""><img src={instagram}/></a>
            <a href=""><img src={facebook}/></a>
        </div>
        </>
    )
}
export default Info;