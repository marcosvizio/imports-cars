import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import { CartItem } from '../CartItem/CartItem'
import { Button } from 'react-bootstrap'

export const Cart = () => {

    const { cart,clear } = React.useContext(CartContext)

    const navigate = useNavigate()

  return (
    <>
        {cart.length > 0 ? 
            (<div>
                {cart.map((product) => (
                    <CartItem item={product} key={product.id} />
                ))}
                <h4>Total a pagar: ${cart.map((product)=>(product.price * product.quantity)).reduce((a,b) => a + b, 0)}</h4>
                <Button variant='success' onClick={()=>navigate('/checkout')}>Finalizar Compra</Button>
                <Button variant='danger' onClick={clear}>Limpiar Carrito</Button>
            </div>)
            : 
            (<div>
                <h4>No hay productos en el carrito!</h4>
                <Button onClick={()=>navigate('/products')}>Volver a la tienda</Button>
            </div>)
        }
    </>
  )
}
