import React from 'react'
import Card from '../component/Card'
import {  useSelector } from 'react-redux'
import {remove} from "../redux/cartSlice"

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems)
  
  if (cartItems.length === 0){
     return<h1>Cart is empty😁</h1>;
  }
  else{
    return (
      
        <section id='productsWrapper'>
          {
            cartItems.map((item)=>{
              return(
               <Card key={item.id} item={item} btnText="remove" feature={remove}/>
              )
            })
          }
  
        </section>
    
    )
  }
 
}

export default Cart