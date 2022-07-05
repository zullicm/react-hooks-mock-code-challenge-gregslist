import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  
  function onSearchChange(newValue){
    setSearch(newValue)
  }
  
  function onItemDelete(id){
    const newList = items.filter(item => item.id !== id)
    setItems(newList)
  }
  
  const nameSearched = items.filter(item => item.description.includes(search))

  return (
    <div className="app">
      <Header search={search} onSearchChange={onSearchChange}/>
      <ListingsContainer items={nameSearched} onItemDelete={onItemDelete}/>
    </div>
  );
}

export default App;
