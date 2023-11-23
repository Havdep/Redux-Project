import React from "react";
import { addToCart } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";

function ProductItem({ products, setProducts }) {
  const dispatch = useDispatch();

  function handleClick(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div key={product.id} className="bg-green-100 w-80 p-4 m-4">
          <div className="text-center flex justify-center items-center">
            <img
              src={product.image}
              alt=""
              height="100px"
              width="100px"
              className="object-cover mb-2 rounded-xl"
            />
          </div>
          <div id="content" className="h-full">
            <div className="text-center">
              <h4>{product.title}</h4>
              <p>Price: ${product.price}</p>
            </div>
            <div className="text-center">
              <button
                onClick={() => handleClick(product)}
                className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductItem;
