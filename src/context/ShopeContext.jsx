import React, { createContext, useState } from "react";
import all_product from '../component/assets/all_product.js'

export const ShopeContext=createContext(null);


const getdefaultcart=()=>{
    let cart={}
    for(let index=0;index<all_product.length+1;index++){
        cart[index]=0;
    }
    return cart;
}



const ShopeContextProvider=(props)=>{

    const [cartitem,setcartitem]=useState(getdefaultcart())

    
const addtocart=(itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]+1}))
    console.log(cartitem);
    
}
const removefromcart=(itemid)=>{
    setcartitem((prev)=>({...prev,[itemid]:prev[itemid]-1}))
}
const contextValue={all_product,cartitem,addtocart,removefromcart}

    return (
        <ShopeContext.Provider value={contextValue}>

        {props.children}

        </ShopeContext.Provider>
    )
}
export default ShopeContextProvider;