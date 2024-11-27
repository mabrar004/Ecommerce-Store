import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../store/ContextProvider";

const CategoryPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { handleAddItems, CATEGORY_PRODUCTS } = useContext(CartContext);

  const { productName } = useParams();
  const category = CATEGORY_PRODUCTS[productName] || [];
  return (
    <div className=" mt-16">
      <h2 className=" text-center text-2xl font-bold">
        {productName.toUpperCase()}
      </h2>
      <div className=" mt-7 flex flex-row gap-3 flex-wrap">
        {category.map((item, index) => {
          return (
            <div
              key={index}
              className="hat-item relative cursor-pointer "
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={item.img} className="w-72 h-96  " />

              {hoveredIndex == index && (
                <div
                  className="absolute  bottom-0 left-0 right-0  bg-opacity-50  text-black text-xl font-medium border-2 border-gray-300 bg-white px-16 py-4 text-center mx-6 mb-10 hover:bg-black hover:text-white hover:opacity-90"
                  onClick={() => handleAddItems(item)}
                >
                  <h1>Add to Cart</h1>
                </div>
              )}
              <div className="flex justify-between">
                <p>{item.name}</p>
                <p>{`${item.price}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryPage;
