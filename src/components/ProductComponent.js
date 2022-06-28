import React from 'react';
import {useNavigate} from "react-router-dom";
import "./ProductComponent.css";
import StarIcon from "../assests/star.png";

export default function ProductComponent(props) {

  const {id,title,description,price,image,rating} = props.product;
  const navigate = useNavigate();

  return (
    <div className="product-component">
      <div className="product-img-div">
        <img src={image} className="product-img" alt="product image" />
      </div>
      <div style={{padding:5}}>
        <h2>{title.substring(0, 40)}</h2>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <span>{rating.rate}</span>
            <img src={StarIcon} style={{width:15}} alt="" />
            <span>({rating.count})</span>
          </div>
          <span style={{fontWeight:"600"}}>$ {price}</span>
        </div>
      </div>
      <button
        onClick={() => navigate(`/product/${id}`)}
        className="view-product-btn"
      >
        View Product
      </button>
    </div>
  );
}
