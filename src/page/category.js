import React, { useState,useEffect  } from "react";
import Layout from "../component/layout/layout";
import pr1 from '../images/product/1.jpg'
import pr2 from '../images/product/2.png'
import pr3 from '../images/product/3.jpg'
import pr4 from '../images/product/4.jpg'
import pr5 from '../images/product/3.png'
import pr6 from '../images/product/4.png'
import pr7 from '../images/product/5.jpg'
import pr8 from '../images/product/6.jpg'
import pr9 from '../images/product/7.jpg'
import pr10 from '../images/product/9.jpg'
import pr11 from '../images/product/13.jpg'
import pr12 from '../images/product/12.jpg'
import pr13 from '../images/product/11.jpg'
import Modal from '../elements/Modal';
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
function Category()
{
    const products = [
        {
            id: 1,
            name: "Чашка Інуяша",
            price: 20,
            image: pr1,
            discount:10,
            cod:"CUP637-1",
            category:"Чашки",
            description:"Чашка з героями аніме Інуяша.\n"+
            "Чашку можна мити під краном з губкою. Не рекомендується ставити чашку з принтом у мікрохвильову пічку на тривалий час та мити в посудомийній машинці.\nОб'єм: 330 мл",
        },
        {
            id: 2,
            name: "Свічка Яє Міко",
            price: 30,
            image: pr2,
            discount:10,
            cod:"VR459",
            category:"Аромасвічки",
            description:"Аромат: вишневі цукерки\n Об'єм: 180 мл",
        },
        {
            id: 3,
            name: "Листівка Ділюк",
            price: 25,
            image: pr3,
            discount:10,
            cod:"LS4577",
            category:"Листівки",
            description:"Зворотня сторона біла без написів.\n Розмір: 148x105мм\n  Плотність: 350г",
        },
        {
            id: 4,
            name: "Хаорі Дракен",
            price: 50,
            image: pr4,
            discount:10,
            cod:"XTY37",
            category:"Одяг",
            description:"Пошиті в Україні з якісного атласу. Друк яскравий та чіткий"
        },
        {
            id: 5,
            name: "Акрилова фігурка Юкі Асуна",
            price: 20,
            image: pr5,
            discount:10,
            cod:"AST231-1",
            category:"Аніме фігурки",
            description:"Акрилова фігурка з аніме",
        },
        {
            id: 6,
            name: "Ароматична свічка Є Лань",
            price: 30,
            image: pr6,
            discount:10,
            cod:"SV41-4",
            category:"Аромасвічки",
            description:"Аромот: ожина \n Об'єм: 180 мл",
        },
        {
            id: 7,
            name: "Акрилова фігурка 'Сім'я шпигуна'",
            price: 25,
            image: pr7,
            discount:10,
            cod:"AST231-2",
            category:"Аніме фігурки",
            description:"Акрилова фігурка з аніме Сім'я шпигуна",
        },
        {
            id: 8,
            name: "Акрилова фігурка Грей Фуллбастер",
            price: 50,
            image: pr8,
            discount:10,
            cod:"AST231-3",
            category:"Аніме фігурки",
            description:"Акрилова фігурка з аніме Хвост Фей",
        }
        ,
        {
            id: 9,
            name: "Наклейки 'Вайолет Евергарден'",
            price: 50,
            image: pr9,
            discount:10,cod:"",
            category:"Наклейки",
            description:"Чудові наклейки",
        }
        ,
        {
            id: 10,
            name: "Хаорі Баал, Сегун Райден",
            price: 50,
            image: pr10,
            discount:10,cod:"XTY36",
            category:"Одяг",
            description:"Якісне атласне Хаорі з гри",
        }
        ,
        {
            id: 11,
            name: "Ароматична свічка Аль-Хайтам",
            price: 50,
            image: pr11,
            discount:10,
            cod:"SV41-3",
            category:"Аромасвічки",
            description:"Аромат: зелений чай \n Об'єм: 180 мл",
        }
        ,
        {
            id: 12,
            name: "Ароматична свічка Учіха Ітачі",
            price: 50,
            image: pr12,
            discount:10,cod:"SV41-2",
            category:"Аромасвічки",
            description:"Аромат: дим та спеції \n Об'єм: 180 мл",
        }
        ,
        {
            id:13,
            name: "Ароматична свічка Вінсмок Санджи",
            price: 50,
            image: pr13,
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
    const searchParams = new URLSearchParams(window.location.search);
    return(
        <>
       <div className="body">
        <Layout>
        
        <div className="containerProduct">
            {products.map((product) => (
                <div className="cardProduct" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <Counter />
                <button className="add-buttonProduct" onClick={handleAddToCart} >Додати у кошик</button>
        
                <Link to={`/cart/${product.id}?name=${product.name}&price=${product.price}&image=${product.image}
               &category=${product.category}&cod=${product.cod}
                &description=${product.description}&discount=${product.discount}
                `} className="linkProduct"> Деталі </Link>
                </div>
            ))}
        </div>
         </Layout>
         </div>
         <Modal
        show={showModal}
        message={
          addedToCart ? "Ваш продукт додано до кошика" : "Модальне вікно"
        }
      />
        </>
    )
}
export default Category;