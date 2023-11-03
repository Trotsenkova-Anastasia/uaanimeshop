import React from "react";
import Layout from "../component/layout/layout";
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
import Product from "../elements/Product";
import '../elements/elements.css'
import Category from "../elements/Category";
function Home()
{
    return(
        <>
         <div className="body">
            <Layout>
            <div className="fon">
                <div className="Swip">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                    >
                <SwiperSlide><Img src={slide9} alt="slide9"/></SwiperSlide>
                <SwiperSlide><Img src={s} alt="s"/></SwiperSlide>
                <SwiperSlide><Img src={slide2} alt="Slide2"/></SwiperSlide>
                <SwiperSlide><Img src={slide6} alt="Slide6"/></SwiperSlide>
                <SwiperSlide><Img src={slide5} alt="Slide5"/></SwiperSlide>

                <SwiperSlide><Img src={slide7} alt="slide7"/></SwiperSlide>
                <SwiperSlide><Img src={slide8} alt="slide8"/></SwiperSlide>
                </Swiper>
                </div>
             </div>
            <div className="feature-strip">
            <div className="feature-item">
                <h3>Якісний продукт</h3>
                <p>Ми пропонуємо високоякісні продукти для наших клієнтів.</p>
            </div>
            <div className="feature-item">
                <h3>Безкоштовна доставка</h3>
                <p>Скористайтеся безкоштовною доставкою всіх замовлень.</p>
            </div>
            <div className="feature-item">
                <h3>14-денне повернення</h3>
                <p>Якщо ви не задоволені, поверніть товар протягом 14 днів.</p>
            </div>
            <div className="feature-item">
                <h3>Підтримка 24/7</h3>
                <p>Наша служба підтримки клієнтів доступна 24/7, щоб допомогти вам.</p>
            </div>
            </div>
           
            <h1>Популярні категорії</h1>
           <Category/>
           
            <h1>Популярні товари</h1>
                <Product/>

            </Layout>
           
         </div>

        </>
    )
}
export default Home;