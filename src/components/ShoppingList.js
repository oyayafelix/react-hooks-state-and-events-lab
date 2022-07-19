import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filter, setFilter] = useState("All")
  const handleChange = (e) => {
    setFilter(e.target.value);
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>handleChange(e)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filter === "All" ? items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        )):
        items.filter((item)=>item.category===filter).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))
        }
      </ul>
    </div>
  );
}

export default ShoppingList