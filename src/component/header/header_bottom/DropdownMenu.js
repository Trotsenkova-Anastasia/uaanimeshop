import React, { useState,useEffect,useRef  } from 'react';
import './dropdown.css';
import { Link, useNavigate  } from 'react-router-dom';

function DropdownMenu()
{
  
 
    const [categories, setCategory] = useState([]);
    const navigate = useNavigate ();
    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/category")
        .then((response) => response.json())
        .then((json) => {
          console.log(json); // Log the data for debugging
          setCategory(json);
        });
    }, []);

    const handleCategoryClick = (categoryId) => {
      navigate.useNavigate(`/category/${categoryId}`);
  };
    return (
      <>
        <div class="dropdown">
          <button class="dropbtn">Категорії</button>
          <div class="dropdown-content">
            {categories.map((category) => (
                  <Link to={`/category/${category.id}?id=${category.id}`}  key={category.id}  onClick={() => handleCategoryClick(category.id)}> 
                          <h2>{category.name}</h2>
                </Link>
              ))}
          </div>
        </div>
      </>
    );
}

export default DropdownMenu;


