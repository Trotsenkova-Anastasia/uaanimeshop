import React, { useState,useEffect  } from "react";
import './elements.css'
import { Link } from 'react-router-dom';

function RegisterUser()
{
   
    return(
        <>
       <h2>Реєстрація</h2>
            <div class="registration-form">
                
                <form>
                    <label for="username">Ім'я користувача:</label>
                    <input type="text" id="username" name="username" required/>

                    <label for="email">Електронна пошта:</label>
                    <input type="email" id="email" name="email" required/>

                    <label for="password">Пароль:</label>
                    <input type="password" id="password" name="password" required/>

                    <label for="confirm-password">Підтвердження паролю:</label>
                    <input type="password" id="confirm-password" name="confirm-password" required/>

                    <button type="submit">Зареєструватися</button>
                </form>
            </div>

        </>
    )
}
export default RegisterUser;