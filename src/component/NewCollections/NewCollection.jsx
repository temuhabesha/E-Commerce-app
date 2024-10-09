import React from 'react'
import './NewCollection.css'
import new_collection from '../assets/new_collections'
import Item from '../Items/Item'

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection">
         {new_collection.map((itme,i)=>{
           return <Item  key={i} id={itme.id} name={itme.name} image={itme.image} new_price={itme.new_price} old_price={itme.old_price}/>
         })}
      </div>
    </div>
  )
}

export default NewCollection
