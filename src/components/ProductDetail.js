import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetail.css";
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';
import StarIcon from "../assests/star.png";
import { CircularProgress } from '@material-ui/core';

export default function ProductDetail() {

  const cartProducts = useSelector(state=>state);
  const productsInCart = useSelector((state) => state.cartReducer);
  console.log(cartProducts);
  const dispatch = useDispatch();

  const {productId} = useParams();
  const [productDetail,setProductDetail] = useState(null);
  const [btnMsg,setBtnMsg] = useState("ADD TO CART");

  useEffect(()=>{
    async function fetchProductDetails(){
      fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetail(data);
      //   productsInCart.forEach((el, index) => {
      //     if (el.id === data.id) {
      //       setBtnMsg("ALREADY IN CART");
      //     }
      //   });
      });
    }
    
    fetchProductDetails();

  },[])

  // useEffect(()=>{
    
  //   productsInCart.forEach((el,index)=>{
  //     if(el.id===productDetail.id){
  //       setBtnMsg("ALREADY IN CART");
  //     }
  //   })
  // },[productDetail])
  

  return (
    (!productDetail)?(
    <div style={{width:"100vw",display:"flex",justifyContent:"center",marginTop:100}}>
      <CircularProgress />
    </div>
    ):(
    <div className="product-detail">
      <div className='image-div'>
        <img src={productDetail.image} alt="img" />
      </div>

      <div className='detail-div'>
        <h2 style={{fontSize:"2.5rem"}}>{productDetail.title}</h2>
        <div style={{display:"flex",alignItems:"center"}}>
          <span>{productDetail.rating.rate}</span>
          <img src={StarIcon} style={{width:20,marginRight:10}} alt="" />
          <span style={{borderLeft:"2px solid grey",paddingLeft:10}}>{productDetail.rating.count} Reviews</span>
        </div>
        <p>{productDetail.description}</p>
        <p style={{fontSize:"1.5rem",fontWeight:"bold",color:"rgb(45, 188, 45)"}}>$ {productDetail.price}</p>
        <button className='add-to-cart-btn' onClick={()=>dispatch(addToCart({...productDetail,quantity:1}))}>{btnMsg}</button>
      </div>
    </div>
    )
  )
}
