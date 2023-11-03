import React from "react";
import Layout from "../component/layout/layout";
import './contact.css'
function Contact()
{
    return(
        <>
        <div className="body">
        <Layout>
                <div class="contact-form">
                <h2>Зв'яжіться з нами</h2>
                <form>
                    <label for="name">Ім'я:</label>
                    <input type="text" id="name" name="name" placeholder="Ваше ім'я" required/>
                    
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Ваша електронна пошта" required/>
                    
                    <label for="message">Повідомлення:</label>
                    <textarea id="message" name="message" placeholder="Ваше повідомлення" required></textarea>
                    
                    <button type="submit">Надіслати</button>
                </form>
            </div>
         </Layout>
         </div>
        </>
    )
}
export default Contact;