import React from "react";
import "./Product.css";
const Product = (props) => {
  const { product, addToCartHandler } = props;
  const { name, id, img, price, quantity, ratings, seller } = product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <div className="top">
          <p>{name}</p>
          <p>Price: {price} </p>
        </div>
        <div className="bottom">
          <small>Manufacturer: {seller} </small>
          <small>Rating: {ratings} </small>
        </div>
        <button onClick={() => addToCartHandler(product)} className="btn-cart">
          {" "}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
