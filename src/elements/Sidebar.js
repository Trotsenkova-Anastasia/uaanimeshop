import React from 'react';
import { Link } from 'react-router-dom';
import '../page/admin.css'

const Sidebar = () => {
    function changeColor(element) {
        // Remove 'active' class from all menu items
        var menuItems = document.querySelectorAll('.side_menu li a');
        menuItems.forEach(function(item) {
          item.classList.remove('active');
        });
  
        // Add 'active' class to the clicked menu item
        element.classList.add('active');
      }
            

  return (
    <div className='sidenav'>
      
      <ul className="side_menu">
        <li><Link to="/" >Головна</Link></li>
        <li><Link to="/adminproduct" >Продукти</Link></li>
        <li><Link to="/admincategory" >Категорії</Link></li>
        <li><Link to="/adminorder" >Замовлення</Link></li>


      </ul>

    </div>
  );
};

export default Sidebar;