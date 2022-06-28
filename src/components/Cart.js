import React, { useEffect, useState } from 'react';
import "./Cart.css";
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Cart() {

  const productsInCart = useSelector(state=>state.cartReducer);
  const [totalAmount,setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(()=>{
    setTotalAmount(productsInCart.reduce((acc, el, index) => {
      return acc + el.quantity * el.price;
    }, 0));
  })


  return (
    (productsInCart.length==0)?(
      <div>
        <h2 style={{textAlign:"center"}}>Nothing in the cart</h2>
        <p style={{textAlign:"center",color:"blue",textDecoration:"underline",cursor:"pointer"}} onClick={()=>navigate("/")}>Shop Now</p>
      </div>
    ):(
    <div className="cart">
      <div className="cart-item-container">
        {
          productsInCart.map((product,index)=>(
            <CartItem product={product}/>
          ))
        }
        
      </div>

      <div className='total-div'>
        <h3>Total amount : </h3>
        <h3>
        {
          totalAmount
        }
        </h3>
      </div>

      <button>Proceed to pay</button>
    </div>
    )
  );
}
