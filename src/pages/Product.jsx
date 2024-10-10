import React, { useContext } from 'react'
import { ShopeContext } from '../context/ShopeContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../component/Breadcrums/Breadcrum'
import Productdisplay from '../component/Productdisplay/Productdisplay'
import Descriptionbox from '../component/Descriptionbox/Descriptionbox'
import Releatedproduct from '../component/Releatedproduct/Releatedproduct'

const Product = () => {
  const {all_product}=useContext(ShopeContext)
  const {productId}=useParams()
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Descriptionbox/>
      <Releatedproduct/>
    </div>
  )
}

export default Product
