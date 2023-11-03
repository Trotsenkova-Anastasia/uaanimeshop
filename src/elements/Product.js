import React, { useState,useEffect  } from "react";
import pr1 from '../images/product/1.jpg'
import pr2 from '../images/product/2.png'
import pr3 from '../images/product/3.jpg'
import pr4 from '../images/product/4.jpg'
import './elements.css'
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
function Product()
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
    return(
        <>
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
        <Modal
        show={showModal}
        message={
          addedToCart ? "Ваш продукт додано до кошика" : "Модальне вікно"
        }
      />
        </>
    )
}
export default Product;