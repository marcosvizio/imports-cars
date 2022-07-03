import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { Products } from '../../Data/Products'

export const ItemListContainer = ( {greetings} ) => {

    const [listProducts,setListProducts]=React.useState([])

    const itemLoading = new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve(Products)
        }, 2000)
    })
    itemLoading.then((result)=>{
        console.log(result)
    }).catch((err)=>{
        console.log(err)
    })

    React.useEffect(()=>{
        itemLoading
        .then((res)=>setListProducts(res))
        .catch((error)=>console.log(error))
    },[])

  return (
    <div>

        {greetings}

        <ItemList listProducts={listProducts} />



    </div>
  )
}
