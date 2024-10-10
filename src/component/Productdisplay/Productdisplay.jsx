import React, { useContext } from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopeContext } from '../../context/ShopeContext'

const Productdisplay = (props) => {
    const {product} = props;


const {addtocart}=useContext(ShopeContext)

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
         <div className="productdisplay-image-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
         </div>
         <div className="productdisplay-image">
            <img className='productdisplay-mainimg' src={product.image} alt="" />
         </div>
      </div>
      <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-rightstar">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
          </div>
          <div className="productdisplay-rightprices">
            <div className="productdisplay-rightpriceold">${product.old_price}</div>
            <div className="productdisplay-rightpricenew">${product.new_price}</div>
          </div>
         <div className="productdisplay-rightdisctiption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad saepe mollitia neque nesciunt quia illo, harum ullam aliquam perspiciatis odio porro beatae optio delectus vitae incidunt ratione sequi sed fugit.
         </div>
         <div className="productdisplay-rightsize">
            <h1>select size</h1>
            <div className="productdisplay-rightsizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
         </div>
         <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
         <p className="productdisplay-rightcategory"><span>Categore:</span>Women,T-Shirt,Crop Top</p>
         <p className="productdisplay-rightcategory"><span>Tags:</span>Modern Latest</p>
      </div>
    </div>
  )
}

export default Productdisplay
