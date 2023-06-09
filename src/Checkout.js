import React from 'react';
import './checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className='checkout_left'>
        <img className="checkout_img" src="https://img.freepik.com/free-psd/digital-marketing-facebook-web-banner-template_237398-216.jpg" alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your Shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating} />
          ))}
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout;


//The useStateValue hook is typically used in conjunction with a Context object to access and modify the global state of an application. It returns an array containing the current state and dispatch function.
