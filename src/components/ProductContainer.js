import React, { useEffect } from 'react';
import "./ProductContainer.css";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions';
import { CircularProgress } from "@material-ui/core";


export default function ProductContainer() {
  
  const myState = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    async function fetchProducts(){
      console.log("fetching...")
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => dispatch(setProducts(data)));
    }
    
    fetchProducts();
  },[])
  

  return (
    (!myState.productReducer.length)?(
      <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:100}}>
        <CircularProgress />
      </div>
      ):(
      <div className="product-container">
        {
          myState.productReducer.map((product, index) => (
            <ProductComponent product={product} />
          ))
        }
      </div>
    )
  );
}
