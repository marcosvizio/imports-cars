import React from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../Data/Products'


export const ItemListContainer = ( {greetings} ) => {

    const [listProducts,setListProducts]=React.useState([])
    const [loading,setLoading]=React.useState(false)
    const {categoryId}=useParams()

   

    React.useEffect(()=>{
        setLoading(true)
        getProducts
        .then((res)=>{
            if (!categoryId){
                setListProducts(res)
            }else{
                setListProducts(res.filter((prod)=>prod.category===categoryId))
            }
        })
        .catch((error)=>console.log(error))
        .finally(()=>setLoading(false))
    }, [])

  return (
    <div>
    
    {loading ?<p> Cargando </p>: <ItemList listProducts={listProducts} />}   

    </div>
  )
}
