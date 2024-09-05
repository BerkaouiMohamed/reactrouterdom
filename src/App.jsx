import React, { useEffect, useState } from "react";
import Navbar from "./comopnents/Navbar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import appAxios from "./utils/axiosConfig";
import SinglePrduct from "./pages/SinglePrduct";

function App() {
  const [homeProducts, setHomeProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    appAxios
      .get("/products")
      .then((res) => {
        if (res.status === 200) {
          setHomeProducts(
            res.data
              .sort((a, b) => b?.rating?.rate - a?.rating?.rate)
              .slice(0, 5)
          );
          setAllProducts(
            res.data.sort((a, b) => Math.random() - Math.random())
          );
        }
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home products={homeProducts} />} />
        <Route path="products" element={<div className="hello"><Outlet/></div>}>
          <Route path="" element={<Products products={allProducts} />} />
          <Route path=":id" element={<SinglePrduct />} />
   

        </Route>
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
