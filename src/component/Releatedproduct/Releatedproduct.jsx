import React from 'react'
import './Releatedproduct.css'
import data_product from '../assets/data'
import Item from '../Items/Item'

const Releatedproduct = () => {
  return (
    <div className='releatedproduct'>
      <h1>Related product</h1>
      <hr />
      <div className="relatedproducts-item">
          {data_product.map((item,i)=>{
           return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Releatedproduct
