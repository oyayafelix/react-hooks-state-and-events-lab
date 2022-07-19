import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  const handleAdd = () =>{
    setCart(!cart)
  }
  const inCart = cart ? "in-cart" : ""
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAdd}>Add to Cart</button>
    </li>
  );
}

export default Item