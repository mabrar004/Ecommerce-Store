import React, { useContext, useState } from "react";

import { CartContext } from "../store/ContextProvider";

const Shop = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { handleAddItems, products } = useContext(CartContext);

  return (
    <div className="categories">
      {products.map((product, index) => (
        <div key={index} className="category flex flex-col my-10 mx-16  px-6 ">
          <h2 className="text-3xl font-bold mt-10">{product.title}</h2>
          <div className="flex flex-row gap-5 flex-wrap mt-10 ">
            {product.img.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="hat-item relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(imgIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={img} className="w-72 h-96" />
                {hoveredIndex === imgIndex && (
                  <div
                    className="absolute bottom-0 left-0 right-0 bg-opacity-50 text-black text-xl font-medium border-2 border-gray-300 bg-white px-16 py-4 text-center mx-6 mb-10 hover:bg-black hover:text-white hover:opacity-90"
                    onClick={() => {
                      const selectedProduct = {
                        name: product.name[imgIndex],
                        price: product.price[imgIndex],
                        img: img,
                        quantity: 1,
                      };
                      handleAddItems(selectedProduct);
                    }}
                  >
                    <h1>Add to Cart</h1>
                  </div>
                )}
                <div className="flex flex-row justify-between">
                  <h1>{product.name[imgIndex]}</h1>
                  <h1>{`${product.price[imgIndex]}`}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
