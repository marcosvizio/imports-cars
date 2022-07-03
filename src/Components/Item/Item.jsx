import React from 'react'
import { Card, Button } from "react-bootstrap"
export const Item = ({item}) => {
  return (
    <div>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.img} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text> Precio {item.price}</Card.Text>
    <Button variant="primary">Ver más</Button>
  </Card.Body>
</Card>

    </div>
  )
}
