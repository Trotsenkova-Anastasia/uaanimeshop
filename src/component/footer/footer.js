import React from "react";
import './footer.css'
import Logo from "../footer/logo";
import MenuFooter from "../footer/menu_footer";
import Img from '../../elements/Img'
import marker from '../../images/marker.png'
import mail from '../../images/mail.png'
import tel from '../../images/tel.png'
import SocialNetworks from "./social_networks";
function Footer()
{
    return(
        <>
       <div class="containerFooter">
      
        <div class="column">
            <Logo/>
            <h4>Наш аніме-інтернет-магазин - це місце, де ви можете знайти найкращі товари і 
                товари для любителів аніме. Ми пропонуємо широкий вибір продукції, пов'язаної 
                з анімацією та культурою аніме, щоб задовольнити ваші потреби та захоплення.</h4>
            <div className="infoFooter"><Img src={marker} alt="marker"/>123 Street, New York, USA</div>
            <div className="infoFooter"><Img src={mail} alt="mail"/>uanime@gmail.com</div>
            <div className="infoFooter"><Img src={tel} alt="tel"/>+38 096 523 23 26</div>
        </div>
        <div class="column"><MenuFooter/></div>
        <div class="column"><SocialNetworks/></div>
        </div>
        </>
    )
}
export default Footer;