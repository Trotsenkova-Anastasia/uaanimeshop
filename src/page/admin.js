import React from "react";
import './home.css';
import slide2 from '../images/slide2.jpg';
import slide8 from '../images/slide8.jpeg';
import slide7 from '../images/slide7.jpeg';
import slide5 from '../images/slide5.jpeg';
import slide6 from '../images/slide6.jpeg';
import s from '../images/s.jpg';
import slide9 from '../images/11.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Img from '../elements/Img'
import '../elements/elements.css'
import Sidebar from "../elements/Sidebar";
function Home()
{
    return(
        <>
         <div className="body">
          
              <div class="admin-panel">
          <div class="sidebar">
            <h2>Admin Panel</h2>
            <Sidebar/>
          </div>
          <div class="content">
            
            <h1>Welcome to the Admin Panel</h1>
          </div>
        </div>
         </div>

        </>
    )
}
export default Home;