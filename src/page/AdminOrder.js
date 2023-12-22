import React from "react";
import Layout from "../component/layout/layout";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import {
    Button,
    EditableText,
    Toaster,
    Position,
  } from "@blueprintjs/core";
  const AppToaster = Toaster.create({
    position: Position.TOP,
  });

const AdminOrder = () => {
    const [orders, setOrders] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newCod, setNewCod] = useState("");
    const [newUrl, setNewUrl] = useState("");

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/order")
        .then((response) => response.json())
        .then((json) => setOrders(json));
    }, []);
    
    const addOrder = () => {
      const name = newName.trim();
      const price = newPrice.trim();
     
      const cod = newCod.trim();
    
      const image_url = newUrl.trim();
      if (name && image_url && cod && price) {
        fetch("http://127.0.0.1:8000/api/order", {
          method: "POST",
          body: JSON.stringify({
            name,
            image_url,
           
            cod,
            price,
          
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setOrders([...orders, data]);
            setNewName("");
            setNewUrl("");
           
            AppToaster.show({
              message: "orders added successfully",
              intent: "success",
              timeout: 3000,
            });
          });
      }
    };
    
  
    const updateOrder= (id) => {
      const order = orders.find((order) => order.id === id);
  
      fetch(`http://127.0.0.1:8000/api/order/${id}`, {
        method: "PUT",
        body: JSON.stringify(order),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          AppToaster.show({
            message: "order updated successfully",
            intent: "success",
            timeout: 3000,
          });
        });
    };
  
    const deleteOrder = (id) => {
      fetch(`http://127.0.0.1:8000/api/order/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          setOrders((values) => {
            return values.filter((item) => item.id !== id);
          });
          AppToaster.show({
            message: "order deleted successfully",
            intent: "success",
            timeout: 3000,
          });
        });
    };
  
    const onChangeHandler = (id, key, value) => {
      setOrders((values) => {
        return values.map((item) =>
          item.id === id ? { ...item, [key]: value } : item
        );
      });
    };
  
    
      return(
          <>
           <div className="body">
             
              <table class="bp4-html-table .modifier">
      <thead>
         <tr>
  
         <th>Id</th>
          <th>Назва</th>
          <th>Ціна</th>
          <th>Код</th>
           <th>URL картинки</th>
           <th>Картинка</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td><EditableText
                value={order.name}
                onChange={(value) => onChangeHandler(order.id, "name", value)}
              /></td>
               <td>
              <EditableText
                value={order.price}
                onChange={(value) => onChangeHandler(order.id, "price", value)}
              />
            </td>
            <td>
              <EditableText
                value={order.cod}
                onChange={(value) => onChangeHandler(order.id, "cod", value)}
              />
            </td>
           
            <td>
              <EditableText
                value={order.image_url}
                onChange={(value) => onChangeHandler(order.id, "image_url", value)}
              />
            </td>
            <td>
              <img style={{width:"50px;",height:"70px"}} src={require("../images/product/" + order.image_url)} alt={order.name} />
            </td>
            <td>
              <Button intent="primary" onClick={() => updateOrder(order.id)}>
                Update
              </Button>
              &nbsp;
              <Button intent="danger" onClick={() => deleteOrder(order.id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
            <tr>
            <td>
               
              </td>
              <td>
                <input
                type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Add name here..."
                />
              </td>
              <td>
              <input
                type="text"
                  placeholder="Add price here..."
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                />
              </td>
             
              <td>
              <input
                type="text"
                  placeholder="Add cod here..."
                  value={newCod	}
                  onChange={(e) => setNewCod(e.target.value)}
                />
              </td>
             
             
              <td>
              <input
                type="text"
                  placeholder="Add image url here..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                />
              </td>
             
              <td>
                <Button intent="success" onClick={addOrder}>
                  Add order
                </Button>
              </td>
            </tr>
          </tfoot>
    </table>

           </div>
  
          </>
      )
};

export default AdminOrder;