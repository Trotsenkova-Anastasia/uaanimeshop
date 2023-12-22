import React from "react";
import Layout from "../component/layout/layout";
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
function Basket({ cartItems })
{
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
        <Layout>
        <div className="contact-form">
          <h2>Ваші замовлення</h2>

          <div className="body">
            <table className="bp4-html-table .modifier">
              <thead>
                <tr>
                  <th>Назва</th>
                  <th>Ціна</th>
                  <th>Код</th>
                  <th>Картинка</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <EditableText
                        value={product.name}
                        onChange={(value) => onChangeHandler(product.id, "name", value)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={product.price}
                        onChange={(value) => onChangeHandler(product.id, "price", value)}
                      />
                    </td>
                    <td>
                      <EditableText
                        value={product.cod}
                        onChange={(value) => onChangeHandler(product.id, "cod", value)}
                      />
                    </td>
                    <td>
                      <img
                        style={{ width: "50px", height: "70px" }}
                        src={require(`../images/product/${product.image_url}`)}
                        alt={product.name}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
         </Layout>
         </div>
        </>
    )
}
export default Basket;