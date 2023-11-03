import React from "react";
import Layout from "../component/layout/layout";
import Product from "../elements/Product";
import '../elements/elements.css'
import './cardProduct.css'
import Recomend from "../elements/Recomend";
function CardProduct()
{
    return(
        <>
        <Layout> 
            <div className="card_product"> 
            <Product/> 
            </div>
        </Layout>
        </>
    )
}
export default CardProduct;