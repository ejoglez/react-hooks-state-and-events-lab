import React, {useState} from "react";

function Item({ name, category }) {

  const [addToCart, setAddToCart] = useState(false);

  function handleClick(){
    setAddToCart(!addToCart)
  }

  return (
    <li className={addToCart ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick}className="add">{addToCart ? 'Remove From Cart' : 'Add To Cart'}</button>
    </li>
  );
}

export default Item;
