import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [selectedCatorgory, setSelectedCatorgory] = useState('All');

  function handleFilter(e){
    setSelectedCatorgory(e.target.value)
  }

  const displayedCatorgory = items.filter((item)=>{
    if (selectedCatorgory === 'All')
    return true;
    else{
      return item.category === selectedCatorgory;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayedCatorgory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
