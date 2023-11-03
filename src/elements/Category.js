import React from "react";
import category1 from '../images/category1.jpg';
import category2 from '../images/category2.jpg';
import category3 from '../images/category3.jpg';
import category4 from '../images/category4.jpg';
import category5 from '../images/category5.jpg';
import category6 from '../images/category6.jpg';
import './elements.css'
import { Link } from 'react-router-dom';
function Category()
{
    const categories = [
        {
            id: 1,
            name: "Аніме Фігурки",
            image: category1,
        },
        {
            id: 2,
            name: "Хаорі",
            image: category2,
        },
        {
            id: 3,
            name: "Чашки",
            image: category3,
        },
        {
            id: 4,
            name: "Аромасвічки",
            image: category4,
        },
        {
            id: 5,
            name: "Наклейки, Стікери",
            image: category5,
        },
        {
            id: 6,
            name: "Листівки",
            image: category6,
        },
    ];
    return(
        <>
         <div className="category-card-container">
        
            {categories.map((category) => (
                <Link to={`/category/${categories}`} className="category-link"  key={category.id}> 
                    <div className="category-card">
                        <img src={category.image} alt={category.name} />
                        <h2>{category.name}</h2>
                    </div>
               </Link>
            ))}
            </div>
        </>
    )
}
export default Category;