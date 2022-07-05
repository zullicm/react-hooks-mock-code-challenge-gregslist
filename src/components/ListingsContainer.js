import React from "react";
import ListingCard from "./ListingCard";

// import ListingCard from "./ListingCard";

function ListingsContainer({ items , onItemDelete}) {

function deleteItem(id){
  fetch(`http://localhost:6001/listings/${id}`,{
    method: "DELETE"
  })
  .then(res => res.json())
  .then(() => onItemDelete(id))
}

  return (
    <main>
      <ul className="cards">
        {items.map(item => <ListingCard key={item.id} deleteItem={deleteItem} item={item}/>)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
