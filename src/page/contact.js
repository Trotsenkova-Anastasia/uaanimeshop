import React from "react";
import Layout from "../component/layout/layout";
import './contact.css'
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
function Contact()
{

    const [contacts, setContact] = useState([]);
    const [newName, setNewName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newMessage, setNewMessage] = useState("");
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/contact")
          .then((response) => response.json())
          .then((json) => setContact(json));
      }, []);
      
      const addContact = () => {
        const name = newName.trim();
        const email = newEmail.trim();
        const message = newMessage.trim();
    
        if (name && email && message ) {
          fetch("http://127.0.0.1:8000/api/contact", {
            method: "POST",
            body: JSON.stringify({
              name,
              email,
              message,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((data) => {
              setContact([...contacts, data]);
              setNewName("");
              setNewEmail("");
              setNewMessage("");
              AppToaster.show({
                message: "Message added successfully",
                intent: "success",
                timeout: 3000,
              });
            });
        }
      };

      const onChangeHandler = (id, key, value) => {
        setContact((values) => {
          return values.map((item) =>
            item.id === id ? { ...item, [key]: value } : item
          );
        });
      };

    return(
        <>
        <div className="body">
        <Layout>
                <div class="contact-form">
                <h2>Зв'яжіться з нами</h2>
                <form>
                    <label for="name">Ім'я:</label>
                    <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="Ваше ім'я"
                    />
                    
                    <label for="email">Email:</label>
                    <input
                    type="text"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="Ваш Email"
                    />
                    
                    <label for="message">Повідомлення:</label>
                    <textarea  onChange={(e) => setNewMessage(e.target.value)} placeholder="Ваше повідомлення" required></textarea>
                    
                    <Button  onClick={addContact}>
                  Надіслати
                </Button>
                </form>
            </div>
         </Layout>
         </div>
        </>
    )
}
export default Contact;