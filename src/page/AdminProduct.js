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

const AdminProduct = () => {
    const [products, setProduct] = useState([]);
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDiscount, setNewDiscount] = useState("");
    const [newCod, setNewCod] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCategoryId, setNewCategoryId] = useState("");
    const [newUrl, setNewUrl] = useState("");

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/product")
        .then((response) => response.json())
        .then((json) => setProduct(json));
    }, []);
    
    const addproduct = () => {
      const name = newName.trim();
      const price = newPrice.trim();
      const discount = newDiscount.trim();
      const cod = newCod.trim();
      const description = newDescription.trim();
      const category_id = newCategoryId.trim();
      const image_url = newUrl.trim();
      if (name && image_url && description && category_id && cod && price && discount) {
        fetch("http://127.0.0.1:8000/api/product", {
          method: "POST",
          body: JSON.stringify({
            name,
            image_url,
            description,
            category_id,
            cod,
            price,
            discount,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
              setProduct([...products, data]);
            setNewName("");
            setNewUrl("");
           
            AppToaster.show({
              message: "products added successfully",
              intent: "success",
              timeout: 3000,
            });
          });
      }
    };
    
  
    const updateproduct= (id) => {
      const product = products.find((product) => product.id === id);
  
      fetch(`http://127.0.0.1:8000/api/product/${id}`, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          AppToaster.show({
            message: "product updated successfully",
            intent: "success",
            timeout: 3000,
          });
        });
    };
  
    const deleteproduct = (id) => {
      fetch(`http://127.0.0.1:8000/api/product/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          setProduct((values) => {
            return values.filter((item) => item.id !== id);
          });
          AppToaster.show({
            message: "product deleted successfully",
            intent: "success",
            timeout: 3000,
          });
        });
    };
  
    const onChangeHandler = (id, key, value) => {
      setProduct((values) => {
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
          <th>Знижка</th>
          <th>Код</th>
          <th>Опис</th>
          <th>Id Категорії</th>
           <th>URL картинки</th>
           <th>Картинка</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td><EditableText
                value={product.name}
                onChange={(value) => onChangeHandler(product.id, "name", value)}
              /></td>
               <td>
              <EditableText
                value={product.price}
                onChange={(value) => onChangeHandler(product.id, "price", value)}
              />
            </td>
            <td>
              <EditableText
                value={product.discount}
                onChange={(value) => onChangeHandler(product.id, "discount", value)}
              />
            </td>
            <td>
              <EditableText
                value={product.cod}
                onChange={(value) => onChangeHandler(product.id, "cod", value)}
              />
            </td>
            <td>
              <EditableText
                value={product.description}
                onChange={(value) => onChangeHandler(product.id, "description", value)}
                
              />
            </td>
            <td>
              <EditableText
                value={product.category_id}
                onChange={(value) => onChangeHandler(product.id, "category_id", value)}
              />
            </td>
            <td>
              <EditableText
                value={product.image_url}
                onChange={(value) => onChangeHandler(product.id, "image_url", value)}
              />
            </td>
            <td>
              <img style={{width:"50px;",height:"70px"}} src={require("../images/product/" + product.image_url)} alt={product.name} />
            </td>
            <td>
              <Button intent="primary" onClick={() => updateproduct(product.id)}>
                Update
              </Button>
              &nbsp;
              <Button intent="danger" onClick={() => deleteproduct(product.id)}>
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
                  placeholder="Add discount here..."
                  value={newDiscount}
                  onChange={(e) => setNewDiscount(e.target.value)}
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
                  placeholder="Add description here..."
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                  style={{
                    whiteSpace: 'pre-wrap',
                  }}
                />
              </td>
              <td>
              <input
                type="text"
                  placeholder="Add category id here..."
                  value={newCategoryId}
                  onChange={(e) => setNewCategoryId(e.target.value)}
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
                <Button intent="success" onClick={addproduct}>
                  Add product
                </Button>
              </td>
            </tr>
          </tfoot>
    </table>

           </div>
  
          </>
      )
};

export default AdminProduct;