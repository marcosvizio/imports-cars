import React from 'react'
import { Item } from '../Item/Item'



export const ItemList = ( {listProducts} ) => {
  return (
    <>
    <h3> Nuestros productos: </h3>
    <div> {listProducts.map((product)=>(
        <Item item={product} key={product.id} />
    ))} </div>
    </>
  )
}
