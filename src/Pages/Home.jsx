import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="container mx-auto mt-5 flex flex-wrap justify-center ">
      <ProductItem products={products} setProducts={setProducts} />
    </div>
  );
}

export default Home;
