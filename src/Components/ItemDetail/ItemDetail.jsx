import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


export const ItemDetail = ({item}) => {

    const Navigate = useNavigate()

  return (
    <div>

    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.img} />
    <Card.Body>
        <Button variant="warning" onClick={()=>Navigate("/products")}> Volver a productos </Button>
      <Card.Title> {item.title} </Card.Title>
      <Card.Text>
        {item.description}
      </Card.Text>
      <Card.Text> 
       Precio: ${item.price}
      </Card.Text>
      <Button variant="success">Agregar al carrito</Button>
    </Card.Body>
  </Card>


    </div>
  )
}
