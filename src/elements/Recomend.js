import React, { useState,useEffect } from 'react';
import Img from '../elements/Img';
import './elements.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import pr1 from '../images/product/3.png'
import pr2 from '../images/product/4.png'
import pr3 from '../images/product/5.jpg'
import pr4 from '../images/product/6.jpg'
import pr5 from '../images/product/7.jpg'
import pr6 from '../images/product/9.jpg'
import pr7 from '../images/product/13.jpg'
import pr8 from '../images/product/12.jpg'
import pr9 from '../images/product/11.jpg'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination } from 'swiper/modules';
import Modal from './Modal';
import { Link } from 'react-router-dom';
function Counter() {
  const [currentValue, setCurrentValue] = useState(1);

  const incrementValue = () => {
    setCurrentValue(currentValue + 1);
  };

  const decrementValue = () => {
    if (currentValue > 1) {
      setCurrentValue(currentValue - 1);
    }
  };

  return (
    <div className="counter">
      <button className="quantity-buttonProduct mns" onClick={decrementValue}>
        -
      </button>
      <input type="text" value={currentValue} className="quantity-inputProduct" />
      <button className="quantity-buttonProduct pls" onClick={incrementValue}>
        +
      </button>
    </div>
  );
}
function Recomend() {
  const products = [
    {
        id: 1,
        name: "Акрилова фігурка Юкі Асуна",
        price: 20,
        image: pr1,
        discount:10,
        cod:"AST231-1",
        category:"Аніме фігурки",
        description:"Акрилова фігурка з аніме",
    },
    {
        id: 2,
        name: "Ароматична свічка Є Лань",
        price: 30,
        image: pr2,
        discount:10,
        cod:"SV41-4",
        category:"Аромасвічки",
        description:"Аромот: ожина \n Об'єм: 180 мл",
    },
    {
        id: 3,
        name: "Акрилова фігурка 'Сім'я шпигуна'",
        price: 25,
        image: pr3,
        discount:10,
        cod:"AST231-2",
        category:"Аніме фігурки",
        description:"Акрилова фігурка з аніме Сім'я шпигуна",
    },
    {
        id: 4,
        name: "Акрилова фігурка Грей Фуллбастер",
        price: 50,
        image: pr4,
        discount:10,
        cod:"AST231-3",
        category:"Аніме фігурки",
        description:"Акрилова фігурка з аніме Хвост Фей",
    }
    ,
    {
        id: 5,
        name: "Наклейки 'Вайолет Евергарден'",
        price: 50,
        image: pr5,
        discount:10,cod:"",
        category:"Наклейки",
        description:"Чудові наклейки",
    }
    ,
    {
        id: 6,
        name: "Хаорі Баал, Сегун Райден",
        price: 50,
        image: pr6,
        discount:10,cod:"XTY36",
        category:"Одяг",
        description:"Якісне атласне Хаорі з гри",
    }
    ,
    {
        id: 7,
        name: "Ароматична свічка Аль-Хайтам",
        price: 50,
        image: pr7,
        discount:10,
        cod:"SV41-3",
        category:"Аромасвічки",
        description:"Аромат: зелений чай \n Об'єм: 180 мл",
    }
    ,
    {
        id: 8,
        name: "Ароматична свічка Учіха Ітачі",
        price: 50,
        image: pr8,
        discount:10,cod:"SV41-2",
        category:"Аромасвічки",
        description:"Аромат: дим та спеції \n Об'єм: 180 мл",
    }
    ,
    {
        id: 9,
        name: "Ароматична свічка Вінсмок Санджи",
        price: 50,
        image: pr9,
        discount:10,
        cod:"SV41-1",
        category:"Аромасвічки",
        description:"Аромат: морське повітря-лайм-лемонграсс \n Об'єм: 180 мл",
    }
];
const [showModal, setShowModal] = useState(false);
const [addedToCart, setAddedToCart] = useState(false);
const [showModalTimeout, setShowModalTimeout] = useState(0);
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
const handleRefreshPage = () => {
  setTimeout(() => {
    window.location.reload();
  }, 100);
};
  return (
    <>
          <div className='recomend'>
            <h1 >Супутні товари</h1>
                <Swiper
                  slidesPerView={5}
                  loop={true}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    '@0.00': {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    '@0.75': {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    '@1.00': {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    '@1.50': {
                      slidesPerView: 4,
                      spaceBetween: 50,
                    },
                    '@2.00': {
                      slidesPerView: 5,
                      spaceBetween: 60,
                    },
                }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          >
          {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="containerProduct">
              <div className="cardProduct">
                <Img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <Counter />
                <button className="add-buttonProduct" onClick={handleAddToCart} >Додати у кошик</button>
                <Link onClick={handleRefreshPage} to={`/cart/${product.id}?name=${product.name}&price=${product.price}&image=${product.image}
                &aroma=${product.aroma}&category=${product.category}&cod=${product.cod}&density=${product.density}
                &description=${product.description}&discount=${product.discount}&material=${product.material}
                &size=${product.size}&volume=${product.volume}`} className="linkProduct">Деталі </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
          </Swiper>
        
          </div>
          <Modal
        show={showModal}
        message={
          addedToCart ? "Ваш продукт додано до кошика" : "Модальне вікно"
        }
      />
    </>
  );
}
export default Recomend;