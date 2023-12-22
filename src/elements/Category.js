import React, { useState,useEffect  } from "react";
import './elements.css'
import { Link } from 'react-router-dom';

function Category()
{
    const [categories, setCategory] = useState([]);
    // const [images, setImage] = useState([]);
  
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/category")
        .then((response) => response.json())
        .then((json) => {
          console.log(json); // Log the data for debugging
          setCategory(json);
        });
    }, []);
    // const categories = [
    //     {
    //         id: 1,
    //         name: "Аніме Фігурки",
    //         image: category1,
    //     },
    //     {
    //         id: 2,
    //         name: "Хаорі",
    //         image: category2,
    //     },
    //     {
    //         id: 3,
    //         name: "Чашки",
    //         image: category3,
    //     },
    //     {
    //         id: 4,
    //         name: "Аромасвічки",
    //         image: category4,
    //     },
    //     {
    //         id: 5,
    //         name: "Наклейки, Стікери",
    //         image: category5,
    //     },
    //     {
    //         id: 6,
    //         name: "Листівки",
    //         image: category6,
    //     },
    // ];
    return(
        <>
         <div className="category-card-container">
        
            {categories.map((category) => (
                <Link to={`/category/${category.id}?id=${category.id}`} className="category-link"  key={category.id}> 
                    <div className="category-card">
                    <img src={require("../images/"+category.image_url)}  alt={category.name} />
                        <h2>{category.name}</h2>
                    </div>
               </Link>
            ))}
            </div>
        </>
    )
}
export default Category;