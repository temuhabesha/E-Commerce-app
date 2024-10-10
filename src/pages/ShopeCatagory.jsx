import React, { useContext } from 'react'
import './CSS/ShopeCatagory.css'
import { ShopeContext } from '../context/ShopeContext'
import dropdown_icon from '../component/assets/dropdown_icon.png'
import Item from '../component/Items/Item'

const ShopeCatagory = (props) => {

  const {all_product}=useContext(ShopeContext)
  // console.log(all_product)
  // console.log(props)

  return (
    <div className='shopecatagory'>
      <img className='shopecatagory-banner' src={props.banner} alt="" />
      <div className="shopecatagoryindexsort">
        <p>
          <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopecatagorysort">
          sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className="shopecatagoryproducts">
        {all_product.map((item,i)=>{
          // console.log(item)
            if(props.category===item.category){
              return <Item  key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null;
            }
        })}
      </div>
      <div className="shopecatagorylodemore">
        Explore More
      </div>
    </div>
  )
}

export default ShopeCatagory
