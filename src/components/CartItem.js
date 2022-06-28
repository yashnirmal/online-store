import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../redux/actions';
import "./CartItem.css";
import { incQuantity,decQuantity } from '../redux/actions';

export default function CartItem(props) {

  const {id,title,image,quantity,price}= props.product;
  const productQuantity = useSelector((state) => state.change);
  console.log(productQuantity);
  const dispatch = useDispatch();

  return (
    <div className='cartitem'>
      <div className="cart-img-div">
        <img src={image} alt="" />
      </div>
      <div className='cart-item-detail-div'>
          <span className='cart-item-title'>{title}</span>
          <div className='quantity-price-div'>
            <div>
                <button onClick={()=>{dispatch(decQuantity(id))}}>-</button>
                <span>{quantity}</span>
                <button onClick={()=>{dispatch(incQuantity(id))}}>+</button>
            </div>
            <span>Price : {quantity*price}</span>
          </div>
          <span className='remove-span' onClick={()=>dispatch(removeFromCart(props.product))}>Remove</span>
      </div>
    </div>
  )
}
