import React, { useState } from "react";

function ListingCard({ item , deleteItem}) {
  const {description, id, image, location} = item
  const [favorite, setFavorite] = useState(false)

  function setFav(){
    setFavorite(!favorite)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={setFav} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={setFav} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => deleteItem(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
