import React from "react";
import Search from "./Search";

function Header({search, onSearchChange}) {

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} onSearchChange={onSearchChange}/>
    </header>
  );
}

export default Header;
