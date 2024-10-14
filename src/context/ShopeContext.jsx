import React, { createContext, useState } from "react";
import all_product from '../component/assets/all_product.js'

export const ShopeContext=createContext(null);


const getdefaultcart=()=>{
    let cart={}
    for(let index=0; index < all_product.length+1; index++){
        cart[index]=0;
    }
    return cart;
}



const ShopeContextProvider=(props)=>{

    const [cartitem,setcartitem]=useState(getdefaultcart())

    
const addtocart=(itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
   
}
const removefromcart=(itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}

   //for tatal price
const gettotalcartamount=()=>{
    let totalAmount=0;
    for(const item in cartitem){
        if(cartitem[item]>0){
            let iteminfo=all_product.find((product)=>product.id===Number(item))
            totalAmount+=cartitem[item]*iteminfo.new_price;
        }
    }
    return totalAmount;
}

//for total item in the front end on the cart
const gettotalitems=()=>{
    let totalitem=0;
    for(const item in cartitem){
        if(cartitem[item]>0){
            totalitem+=cartitem[item]
        }
    }
    return totalitem;
}

const contextValue={gettotalitems,gettotalcartamount, all_product,cartitem,addtocart,removefromcart}


    return (
        <ShopeContext.Provider value={contextValue}>

        {props.children}

        </ShopeContext.Provider>
    )
}
export default ShopeContextProvider;