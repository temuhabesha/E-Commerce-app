import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopeContext } from '../../context/ShopeContext'
import remove_icon from '../assets/cart_cross_icon.png'

const Cartitem = () => {

    const {gettotalcartamount,all_product,cartitem,removefromcart}=useContext(ShopeContext);
    // console.log(gettotalcartamount);
    

  return (
    <div className='cartitems'>
      <div className="cartitem-formatmain">
        <p>products</p>
        <p>Title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{

        if(cartitem[e.id]>0)
        {
            return <div>
            <div className="cartitems-format cartitem-formatmain">
                <img src={e.image} alt="" className='carticon-producticon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartitem[e.id]}</button>
                <p>${e.new_price*cartitem[e.id]}</p>
                <img className='carticons-removeicon' src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt="" />
            </div>
            <hr />
          </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
                <div className="cartitems-totalitem">
                    <p>Subtotal</p>
                    <p>${gettotalcartamount()}</p>
                </div>
                <hr />
                <div className="cartitems-totalitem">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-totalitem">
                    <h3>Total</h3>
                    <h3>${gettotalcartamount()}</h3>
                </div>

            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocod">
            <p>If you have a promocode,Enter it here</p>
            <div className="cartitem-promobox">
                <input type="text" name="" id="" placeholder='promo code'/>
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
