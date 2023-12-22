
import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './page/home'
import CardProduct from './page/cardProduct'
import Cart from './page/cart'
import Category from './page/category'
import Contact from './page/contact'
import DeliveryPayment from './page/deliveryPayment'
import Basket from './page/basket'
import Admin from './page/admin'
import RegisterUser from './page/register'
import LoginUser from './page/login'
import AdminCategory from './page/AdminCategory';
import AdminOrder from './page/AdminOrder';
import AdminProduct from './page/AdminProduct';
import Order from './page/order';
import { useEffect, useState } from "react";
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

function App() {
  const [books, setBooks] = useState([]);
  const [newName, setNewName] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [newPublish_date, setNewPublish_date] = useState("");

  const addBook = () => {
    const name = newName.trim();
    const author = newAuthor.trim();
    const publish_date = newPublish_date.trim();
    if (name && author && publish_date) {
      fetch("http://127.0.0.1:8000/api/books", {
        method: "POST",
        body: JSON.stringify({
          name,
          author,
          publish_date,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setBooks([...books, json]);
          setNewName("");
          setNewAuthor("");
          setNewPublish_date("");
          AppToaster.show({
            message: "Book added successfully",
            intent: "success",
            timeout: 3000,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
          AppToaster.show({
            message: "Error adding book",
            intent: "danger",
            timeout: 3000,
          });
        });
    }
  };
  

  const updateBook= (id) => {
    const book = books.find((book) => book.id === id);

    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        AppToaster.show({
          message: "Book updated successfully",
          intent: "success",
          timeout: 3000,
        });
      });
  };

  const deleteBook = (id) => {
    fetch(`http://127.0.0.1:8000/api/books/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setBooks((values) => {
          return values.filter((item) => item.id !== id);
        });
        AppToaster.show({
          message: "Book deleted successfully",
          intent: "success",
          timeout: 3000,
        });
      });
  };

  const onChangeHandler = (id, key, value) => {
    setBooks((values) => {
      return values.map((item) =>
        item.id === id ? { ...item, [key]: value } : item
      );
    });
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/books")
      .then((response) => response.json())
      .then((json) => setBooks(json));
  }, []);

  return (
    
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cardProduct' element={<CardProduct/>}/>
            <Route path='/cart/:id' element={<Cart/>}/>
            <Route path='/category/:id' element={<Category/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/deliveryPayment' element={<DeliveryPayment/>}/>
            <Route path='/basket' element={<Basket/>}/>
            <Route path='/admin' element={<Admin/>}/>
            <Route path='/register' element={<RegisterUser/>}/>
            <Route path='/login' element={<LoginUser/>}/>
            <Route path="/AdminCategory" element={<AdminCategory/>} />
            <Route path="/AdminOrder" element={<AdminOrder/>} />
            <Route path="/AdminProduct" element={<AdminProduct/>} />
          
          </Routes>
        </BrowserRouter>
      </div>
    </>
  //   <table class="bp4-html-table .modifier">
  //   <thead>
  //     <tr>

  //       <th>Id</th>
  //       <th>Name</th>
  //       <th>Author</th>
  //       <th>Publish_date</th>
  //       <th>Action</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {books.map((book) => (
  //       <tr key={book.id}>
  //         <td>{book.id}</td>
  //         <td><EditableText
  //             value={book.name}
  //             onChange={(value) => onChangeHandler(book.id, "name", value)}
  //           /></td>
  //         <td>
  //           <EditableText
  //             value={book.author}
  //             onChange={(value) => onChangeHandler(book.id, "author", value)}
  //           />
  //         </td>
  //         <td>
  //           <EditableText
  //             value={book.publish_date}
  //             onChange={(value) => onChangeHandler(book.id, "publish_date", value)}
  //           />
  //         </td>
  //         <td>
  //           <Button intent="primary" onClick={() => updateBook(book.id)}>
  //             Update
  //           </Button>
  //           &nbsp;
  //           <Button intent="danger" onClick={() => deleteBook(book.id)}>
  //             Delete
  //           </Button>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  //   <tfoot>
  //         <tr>
         
  //           <td>
  //             <InputGroup
  //               value={newName}
  //               onChange={(e) => setNewName(e.target.value)}
  //               placeholder="Add name here..."
  //             />
  //           </td>
  //           <td>
  //             <InputGroup
  //               placeholder="Add Author here..."
  //               value={newAuthor}
  //               onChange={(e) => setNewAuthor(e.target.value)}
  //             />
  //           </td>
  //           <td>
  //             <InputGroup
  //               placeholder="Add Publish_date here..."
  //               value={newPublish_date}
  //               onChange={(e) => setNewPublish_date(e.target.value)}
  //             />
  //           </td>
  //           <td>
  //             <Button intent="success" onClick={addBook}>
  //               Add book
  //             </Button>
  //           </td>
  //         </tr>
  //       </tfoot>
  // </table>
  );
}



export default App;
