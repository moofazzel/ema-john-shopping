import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Procuct/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCartHandler = (product) => {
    const cartProduct = [...cart, product];
    setCart(cartProduct);
    console.log(cartProduct)
  };

  return (
    <div className="main-container">
      <div className="shop-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCartHandler={addToCartHandler}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
