import React from "react";
import Layout from "../component/layout/layout";
import './contact.css'
import RegisterUser from "../elements/RegisterUser";
import '../page/auth.css';
function Register()
{
    return(
        <>
        <div className="body">
        
              <RegisterUser/>
        
         </div>
        </>
    )
}
export default Register;