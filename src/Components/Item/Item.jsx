import React from 'react'
import { Card, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

export const Item = ({item}) => {

  const navigate = useNavigate()

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text> Precio: ${item.price}</Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/detail/${item.id}`)} >Ver más...</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
