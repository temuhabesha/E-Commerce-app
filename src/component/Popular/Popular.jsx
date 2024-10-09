import React from 'react'
import './Popular.css'
import data_product from '../assets/data'
import Item from '../Items/Item'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((itme,i)=>{
            return<Item key={i} id={itme.id} name={itme.name} image={itme.image} new_price={itme.new_price} old_price={itme.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Popular
