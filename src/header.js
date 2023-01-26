import React from "react";

function Header(props) {
  return (
    <header className="p-4">
      <h1 className="font-bold text-4xl">{props.heading}</h1>
      <Search />
    </header>
  );
}

function Search() {
  return (
    <form>
      <input
        className="border-black  bg-gradient-to-br from-slate-600 to-gray-600 p-2 border-3 rounded-md my-5"
        type="text"
        placeholder="&#x1F50D;Search.."
        name="search"
      />
    </form>
  );
}

export default Header;
