import React from "react";
import Layout from "../component/layout/layout";
import './deliveryPayment.css'
function DeliveryPayment()
{
    return(
        <>
      <div className="body">
        <Layout>
          <div class="delivery-payment-form">
          <h2>Вибір доставки та оплати</h2>
          <form>
              <label for="delivery">Спосіб доставки:</label>
              <select id="delivery" name="delivery" required>
                  <option value="courier">Кур'єр</option>
                  <option value="post">Пошта</option>
                  <option value="pickup">Самовивіз</option>
              </select>
              <label for="payment">Спосіб оплати:</label>
              <div>
             
              <input type="radio" id="credit-card" name="payment" value="credit-card" required/>
              <label for="credit-card">Кредитна карта</label>
              <input type="radio" id="paypal" name="payment" value="paypal" required/>
              <label for="paypal">PayPal</label>
              <input type="radio" id="cash-on-delivery" name="payment" value="cash-on-delivery" required/>
              <label for="cash-on-delivery">Оплата при отриманні</label>
              </div>
              <button type="submit">Підтвердити</button>
          </form>
      </div>
         </Layout>
         </div>
        </>
    )
}
export default DeliveryPayment;