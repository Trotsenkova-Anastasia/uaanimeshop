import React, { useState,useEffect } from 'react';
import Img from '../elements/Img';
import './elements.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Navigation, Pagination,Autoplay } from 'swiper/modules';
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
//  
//     {
//         id: 1,
//         name: "Акрилова фігурка Юкі Асуна",
//         price: 20,
//         image: pr1,
//         discount:10,
//         cod:"AST231-1",
//         category:"Аніме фігурки",
//         description:"Акрилова фігурка з аніме",
//     },
//     {
//         id: 2,
//         name: "Ароматична свічка Є Лань",
//         price: 30,
//         image: pr2,
//         discount:10,
//         cod:"SV41-4",
//         category:"Аромасвічки",
//         description:"Аромот: ожина \n Об'єм: 180 мл",
//     },
//     {
//         id: 3,
//         name: "Акрилова фігурка 'Сім'я шпигуна'",
//         price: 25,
//         image: pr3,
//         discount:10,
//         cod:"AST231-2",
//         category:"Аніме фігурки",
//         description:"Акрилова фігурка з аніме Сім'я шпигуна",
//     },
//     {
//         id: 4,
//         name: "Акрилова фігурка Грей Фуллбастер",
//         price: 50,
//         image: pr4,
//         discount:10,
//         cod:"AST231-3",
//         category:"Аніме фігурки",
//         description:"Акрилова фігурка з аніме Хвост Фей",
//     }
//     ,
//     {
//         id: 5,
//         name: "Наклейки 'Вайолет Евергарден'",
//         price: 50,
//         image: pr5,
//         discount:10,cod:"",
//         category:"Наклейки",
//         description:"Чудові наклейки",
//     }
//     ,
//     {
//         id: 6,
//         name: "Хаорі Баал, Сегун Райден",
//         price: 50,
//         image: pr6,
//         discount:10,cod:"XTY36",
//         category:"Одяг",
//         description:"Якісне атласне Хаорі з гри",
//     }
//     ,
//     {
//         id: 7,
//         name: "Ароматична свічка Аль-Хайтам",
//         price: 50,
//         image: pr7,
//         discount:10,
//         cod:"SV41-3",
//         category:"Аромасвічки",
//         description:"Аромат: зелений чай \n Об'єм: 180 мл",
//     }
//     ,
//     {
//         id: 8,
//         name: "Ароматична свічка Учіха Ітачі",
//         price: 50,
//         image: pr8,
//         discount:10,cod:"SV41-2",
//         category:"Аромасвічки",
//         description:"Аромат: дим та спеції \n Об'єм: 180 мл",
//     }
//     ,
//     {
//         id: 9,
//         name: "Ароматична свічка Вінсмок Санджи",
//         price: 50,
//         image: pr9,
//         discount:10,
//         cod:"SV41-1",
//         category:"Аромасвічки",
//         description:"Аромат: морське повітря-лайм-лемонграсс \n Об'єм: 180 мл",
//     }
// ];

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

const [products, setProduct] = useState([]);


useEffect(() => {
  fetch("http://127.0.0.1:8000/api/product")
    .then((response) => response.json())
    .then((json) => {
      console.log(json); // Log the data for debugging
      setProduct(json);
    });
}, []);

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
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                  
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          >
          {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="containerProduct">
              <div className="cardProduct">
                <Img src={require("../images/product/"+product.image_url)} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <Counter />
                <button className="add-buttonProduct" onClick={handleAddToCart} >Додати у кошик</button>
                <Link onClick={handleRefreshPage} to={`/cart/${product.id}?name=${product.name}&price=${product.price}&image=${require("../images/product/"+product.image_url)}
               &category=${product.category_id}&cod=${product.cod}
                &description=${product.description}&discount=${product.discount}
                `} className="linkProduct">Деталі </Link>
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