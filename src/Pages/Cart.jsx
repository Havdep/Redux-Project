import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../Redux/CartSlice";

function Cart() {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(cartItems);

  const price = cartItems.reduce((acc, curr) => {
    const itemPrice = curr.price;
    return acc + itemPrice;
  }, 0);
  const formattedPrice = price.toFixed(2);

  //   console.log(price);

  function handleRemove(itemId) {
    dispatch(removeCart(itemId));
  }

  return (
    <>
      <div className="flex flex-row gap-14 justify-between mt-6">
        <div className="text-3xl font-semibold text-center mb-4 mt-4">
          Your Shopping Cart
        </div>
        <div className="text-3xl font-semibold text-center mb-4 mt-4">
          Total Amount: ${formattedPrice}
        </div>
      </div>
      {cartItems.length > 0 ? (
        <div className="flex flex-wrap justify-center">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white w-80 p-4 m-4 border border-gray-300 rounded-md"
            >
              <div className="text-center flex justify-center items-center">
                <img
                  src={item.image}
                  alt=""
                  height="100px"
                  width="100px"
                  className="object-cover mb-2 rounded-md"
                />
              </div>
              <div id="content" className="h-full">
                <div className="text-center">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-700">Price: ${item.price}</p>
                </div>
                <div className="text-center mt-2">
                  {/* <div>Quantity: 1</div> */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-2xl bg-orange-300">No Items Added</div>
      )}
    </>
  );
}

export default Cart;
