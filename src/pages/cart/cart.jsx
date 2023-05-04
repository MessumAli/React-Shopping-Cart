import React, { useContext } from 'react'
import { PRODUCTS } from "../../products"
import { ShopContext } from "../../context/shopContext"
import { CartItem } from './cartItem'
import './cart.css'
import { useNavigate } from 'react-router-dom'

export const Cart = () => {

const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);

const totalAmount = getTotalCartAmount()

const navigate = useNavigate()

  return (
    <div className='cart'>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
        </div>

        {totalAmount > 0 ? (
        <div className='checkout'>
            <p>Subtotal: ${totalAmount}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
        ) : ( <h1>Your Cart Is Empty</h1> )
        }

    </div>
  )
}
