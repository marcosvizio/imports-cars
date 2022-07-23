import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount.jsx'
import { CartContext } from '../../Context/CartContext'


export const ItemDetail = ({item}) => {

  const navigate = useNavigate()

  const { addItem, isInCart } = React.useContext(CartContext)

  const [count, setCount] = React.useState(1)

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
            <Button className='itemDetail__home' variant='warning' onClick={()=>navigate('/products')}>Volver a Productos</Button>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>Precio: ${item.price}</Card.Text>
            <Card.Text>Stock disponible: {item.stock}</Card.Text>
            {!isInCart(item.id) ? (
              <ItemCount count={count} setCount={setCount} stock={item.stock} onSubmit={()=> addItem(item, count)} />
            ):(
              <div>
              <Button variant='success' onClick={()=>navigate('/cart')}>Ir al Carrito</Button>
              <Button variant='warning' onClick={()=>navigate('/products')}>Seguir Comprando</Button>
              </div>
            )}
        </Card.Body>
    </Card>
    </div>
  )
}
