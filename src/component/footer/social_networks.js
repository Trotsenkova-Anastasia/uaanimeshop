import React from "react";
import './footer.css'
import Img from '../../elements/Img'
import linkedIn from '../../images/in.png'
import youtube from '../../images/youtube.png'
import twitter from '../../images/twitter.png'
import instagram from '../../images/instagram.png'
import facebook from '../../images/facebook.png'
function SocialNetworks()
{
    return(
        <>
        <div className="fon_footer">
          <div className="social_Networks">
            <h1>Наші соціальні мережі</h1>
            <div className="socialNetwork">
                <Img src={linkedIn} alt="LinkedIn"/>
                <a href="#">LinkedIn</a>
            </div>
            <div className="socialNetwork">
                <Img src={youtube} alt="youtube"/>
                <a href="#">Youtube</a>
            </div>
            <div className="socialNetwork">
                <Img src={twitter} alt="twitter"/>
                <a href="#">Twitter</a>
            </div>
            <div className="socialNetwork">
                <Img src={instagram} alt="instagram"/>
                <a href="#">Instagram</a>
            </div>
            <div className="socialNetwork">
                <Img src={facebook} alt="facebook"/>
                <a href="#">Facebook</a>
            </div>
        </div>
        </div>
        </>
    )
}
export default SocialNetworks;