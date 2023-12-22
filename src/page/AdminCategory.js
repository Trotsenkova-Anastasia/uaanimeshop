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

const AdminCategory = () => {
    const [categories, setCategory] = useState([]);
    const [newName, setNewName] = useState("");
    const [newUrl, setNewUrl] = useState("");

    useEffect(() => {
      fetch("http://127.0.0.1:8000/api/category")
        .then((response) => response.json())
        .then((json) => setCategory(json));
    }, []);
    
    const addCategory = () => {
      const name = newName.trim();
      const image_url = newUrl.trim();
      if (name && image_url) {
        fetch("http://127.0.0.1:8000/api/category", {
          method: "POST",
          body: JSON.stringify({
            name,
            image_url,
          
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
              setCategory([...categories, data]);
            setNewName("");
            setNewUrl("");
           
            AppToaster.show({
              message: "categories added successfully",
              intent: "success",
              timeout: 3000,
            });
          });
      }
    };
    
  
    const updateCategory= (id) => {
      const category = categories.find((category) => category.id === id);
  
      fetch(`http://127.0.0.1:8000/api/category/${id}`, {
        method: "PUT",
        body: JSON.stringify(category),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then(() => {
          AppToaster.show({
            message: "category updated successfully",
            intent: "success",
            timeout: 3000,
          });
        });
    };
  
    const deleteCategory = (id) => {
      fetch(`http://127.0.0.1:8000/api/category/${id}`, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          setCategory((values) => {
            return values.filter((item) => item.id !== id);
          });
          AppToaster.show({
            message: "category deleted successfully",
            intent: "success",
            timeout: 3000,
          });
        });
    };
  
    const onChangeHandler = (id, key, value) => {
      setCategory((values) => {
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
           <th>URL картинки</th>
           <th>Картинка</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {categories.map((category) => (
          <tr key={category.id}>
            <td>{category.id}</td>
            <td><EditableText
                value={category.name}
                onChange={(value) => onChangeHandler(category.id, "name", value)}
              /></td>
            <td>
              <EditableText
                value={category.image_url}
                onChange={(value) => onChangeHandler(category.id, "image_url", value)}
              />
            </td>
            <td>
              <img style={{width:"50px;",height:"70px"}} src={require("../images/" + category.image_url)} alt={category.name} />
            </td>
            <td>
              <Button intent="primary" onClick={() => updateCategory(category.id)}>
                Update
              </Button>
              &nbsp;
              <Button intent="danger" onClick={() => deleteCategory(category.id)}>
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
                  placeholder="Add image url here..."
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                />
              </td>
             
              <td>
                <Button intent="success" onClick={addCategory}>
                  Add category
                </Button>
              </td>
            </tr>
          </tfoot>
    </table>

           </div>
  
          </>
      )
};

export default AdminCategory;