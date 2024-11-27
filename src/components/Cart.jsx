import { useContext, useEffect, useState } from "react";
import { CartContext } from "../store/ContextProvider";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const Cart = () => {
  const { selectedItems, handleDeleteItems, handleAddItems } =
    useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("Selected Items:", selectedItems);
    let total = selectedItems.reduce((curr, product) => {
      console.log("Product:", product);
      return curr + Number(product.price) * product.quantity;
    }, 0);
    setTotalPrice(total);
  }, [selectedItems]);

  const handleIncrement = (product) => {
    const updatedProduct = { ...product, quantity: product.quantity + 1 };
    handleAddItems(updatedProduct);
  };

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      handleAddItems(updatedProduct);
    }
  };

  return (
    <>
      <h2 className="text-2xl text-center mt-20">Your Cart</h2>

      <div className="flex flex-row justify-between items-center mx-20 mt-12 border-b pb-2">
        <h2 className="w-1/5 text-center">Product</h2>
        <h2 className="w-1/5 text-center">Name</h2>
        <h2 className="w-1/5 text-center">Quantity</h2>
        <h2 className="w-1/5 text-center">Price</h2>
        <h2 className="w-1/5 text-center">Remove</h2>
      </div>
      {selectedItems.length === 0 ? (
        <p className="text-2xl text-center my-20">Your cart is empty</p>
      ) : (
        <div className="mx-20 mt-5">
          {selectedItems.map((product, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center py-5 border-b"
            >
              <img
                src={product.img}
                alt={product.name}
                className="mx-16 w-24 h-40 object-cover"
              />

              <p className="w-1/5 text-center">{product.name}</p>
              <div className="mx-20 flex flex-row gap-2">
                <button
                  onClick={() => {
                    handleDecrement(product);
                  }}
                >
                  <MdKeyboardArrowLeft />
                </button>
                <input
                  type="text"
                  className="w-1/6 text-center"
                  readOnly
                  value={product.quantity}
                />
                <button
                  onClick={() => {
                    handleIncrement(product);
                  }}
                >
                  <MdKeyboardArrowRight />
                </button>
              </div>
              <p className=" w-1/5 text-center">{`   ${product.price}`}</p>
              <button
                onClick={() => handleDeleteItems(product.name)}
                className="mx-16 w-1/5 text-center text-red-500 text-xl"
              >
                <RxCross2 />
              </button>
            </div>
          ))}
          <div className="flex flex-col float-right gap-5 text-4xl font-thin ">
            <p className="mt-10 ">Total: {totalPrice.toFixed(2)}</p>
            <div>
              <button className="bg-black text-white py-4 px-7 hover:bg-white hover:text-black hover:border-2 hover:border-black">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
