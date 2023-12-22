import React, { useState,useEffect  } from "react";
import Layout from "../component/layout/layout";
import Modal from '../elements/Modal';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the data for debugging
        setProduct(json);
      });
  }, []);
  
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
    const category_id=searchParams.get("id");
    const filteredProducts = products.find(product => product.category_id === category_id);
    console.log(filteredProducts)
    return(
        <>
       <div className="body">
        <Layout>
        
        <div className="containerProduct">
            {products.filter(product => parseInt(product.category_id) === parseInt(category_id)).map((product) => (
                <div className="cardProduct" key={product.id}>
                <img src={require("../images/product/"+product.image_url)} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <Counter />
                <button className="add-buttonProduct" onClick={handleAddToCart} >Додати у кошик</button>
        
                <Link to={`/cart/${product.id}?name=${product.name}&price=${product.price}&image=${require("../images/product/"+product.image_url)}
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