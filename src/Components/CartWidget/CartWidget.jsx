import 'boxicons'
import React from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

export const CartWidget = () => {

  const { cart } = React.useContext(CartContext)

  return (
    <div> 
      <Link to="/cart">
        <box-icon name="cart" color="#f4f4f4"/>
        <span>{cart.map(item => item.quantity).reduce((a, b) => a + b, 0)}</span>
      </Link>
    </div>
  )
}