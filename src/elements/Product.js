import React, { useState,useEffect  } from "react";
import './elements.css'
// import Modal from './Modal';
import { Link } from 'react-router-dom';
import {
  Button,
  EditableText,
  InputGroup,
  Toaster,
  Position,
} from "@blueprintjs/core";
const AppToaster = Toaster.create({
  position: Position.TOP,
});




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
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/product")
      .then((response) => response.json())
      .then((json) => {
        console.log(json); // Log the data for debugging
        setProduct(json);
      });
  }, []);
  
  return(
        <>
        <div className="containerProduct">
            {
            products.filter(product => parseInt(product.id) < 12).map((product) => (
                <div className="cardProduct" key={product.id}>
                
                <img src={require("../images/product/"+product.image_url)} alt={product.name} />
                
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <Counter />
                
                <button
              className="add-buttonProduct"
             
            >Додати у кошик</button>
        
                <Link to={`/cart/${product.id}?name=${product.name}&price=${product.price}&image=${require("../images/product/"+product.image_url)}
               &category=${product.category_id}&cod=${product.cod}
                &description=${product.description}&discount=${product.discount}
                `} className="linkProduct"> Деталі </Link>
                </div>
            ))}
        </div>

       
        </>
    )
}
export default Product;