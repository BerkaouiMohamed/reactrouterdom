import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <h2>logo</h2>
      <div>
        <p><Link to={"/"}>home</Link></p>
        <p><Link to={"/products"}>products</Link></p>
      </div>
    </div>
  );
}

export default Navbar;
