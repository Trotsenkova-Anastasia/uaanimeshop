import React, { useState,useEffect } from 'react';
import './cart.css'
import Layout from '../component/layout/layout';
import Img from '../elements/Img';
import '../elements/elements.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Zoom, Navigation, Pagination } from 'swiper/modules';
import Recomend from '../elements/Recomend';
import Modal from '../elements/Modal';
import Message from '../elements/Messange';
function Cart() {
  const searchParams = new URLSearchParams(window.location.search);
  const [showModal, setShowModal] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [showModalTimeout, setShowModalTimeout] = useState(0);
  
  const [feedbacks, setFeedbacks] = useState([]);
  const [category, setCategory] = useState([]);
  const category_id=searchParams.get("category")
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/feedback")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the data for debugging
        setFeedbacks(json);
      });
  }, []);
  
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/category")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the data for debugging
        setCategory(json);
      });
  }, []);
  const category_product = category.find((category) =>category.id==category_id);
 
  useEffect(() => {
    if (showModalTimeout > 0) {
      const timeoutId = setTimeout(() => {
        setShowModal(false);
        setShowModalTimeout(0);
      }, showModalTimeout);
  
      return () => clearTimeout(timeoutId);
    }
  }, [showModalTimeout]);
  const handleAddToCart = () => {
    setAddedToCart(true);
    setShowModal(true);
    setShowModalTimeout(2000);
  };
    const [activeTab, setActiveTab] = useState('Опис');
  
    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
  return (
    <>
    <Layout>
    
    
      <div className='cart_conteiner'>
        
        <div className='image-container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          zoom={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-zoom-container">
              <Img src={searchParams.get("image")}  alt="sda" />
            </div>
          </SwiperSlide>
        </Swiper>
        <p>Виробник:</p>
                 <p>UA Anime Group</p>
    
                 <p>Кількість на складі: необмежана</p>
          
        </div>

        <div className='info_product'>
        <div className='name'><h3>{searchParams.get("name")}</h3></div>
        <p>{feedbacks.length} Відгуків</p>
                <div className='rating'>
                  <span className="star" >★</span>
                  <span className="star" >★</span>
                  <span className="star" >★</span>
                  <span className="star" >★</span>
                  <span className="star empty" ></span>
                 
                </div>
                
                <div className="availability-block">
                  <div className="availability-text">&#10004;   В наявності</div>
                </div>
               
                
                 <div className='inf_delivery'>
                 Термін надходження: [Передоплата] 
                 Попереднє замовлення (Україна). 
                 Ваше замовлення виготовляється на наших фабриках. 
                 Доставка від 2 до 14 днів
                 </div>
    
                  <p class="original-price">${searchParams.get("price")} </p>
                  <p class="discount">Знижка: ${searchParams.get("discount")}</p>
                  <p class="final-price">Кінцева ціна: ${searchParams.get("price")-searchParams.get("discount")}</p>
    
                  <button className="AddbuttonProduct" onClick={handleAddToCart} >Додати у кошик</button>
              
              <div className="tabs">
          <div
            className={`tab ${activeTab === 'Опис' ? 'active' : ''}`}
            onClick={() => handleTabClick('Опис')}
          >
            Опис
          </div>
          <div
            className={`tab ${activeTab === 'Відгуки' ? 'active' : ''}`}
            onClick={() => handleTabClick('Відгуки')}
          >
            Відгуки
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 'Опис'  && (
  <div>
               <p>Категорія: {category_product ? category_product.name : 'Категорія не знайдена'}</p>
              <p>Модель:{searchParams.get("cod")}</p>
              <p>{searchParams.get("description")}</p>
              </div> )
           }
          {activeTab === 'Відгуки'  && (
            <Message/>
          )}
        </div>
        </div>
        
      </div>
      

       


          <div className='recomend'>
          <Recomend/>
          </div>
          <Modal
        show={showModal}
        message={
          addedToCart ? "Ваш продукт додано до кошика" : "Модальне вікно"
        }
      />
    </Layout>
    
    </>
  );
}
export default Cart;