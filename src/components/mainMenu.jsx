import hat from "../assets/hat.jpeg";
import jacket1 from "../assets/jacket1.jpg";
import sneakers from "../assets/sneakers.jpeg";
import men from "../assets/men.jpg";
import women from "../assets/women.jpeg";
import { Navigate, useNavigate } from "react-router-dom";

const MainMenu = () => {
  const navigate = useNavigate();
  const PRODUCTS = [
    {
      id: 1,
      img: hat,
      name: "HATS",
      tag_name: "brown cap",
      price: "30 ",
    },
    {
      id: 2,
      img: jacket1,
      name: "JACKETS",
    },
    {
      id: 3,
      img: sneakers,
      name: "SNEAKERS",
    },
    {
      id: 4,
      img: men,
      name: "MENS",
    },
    {
      id: 5,
      img: women,
      name: "WOMENS",
    },
  ];
  const handleCategoryClick = (productName) => {
    navigate(`/Shop/${productName}`);
  };

  return (
    <>
      <div id="categories" className="cursor-pointer ">
        <div
          id="category"
          className="flex flex-wrap justify-center gap-3 mt-20 "
        >
          {PRODUCTS.map((product) => (
            <div
              className="product-item w-1/4  p-2 relative group "
              onClick={() => handleCategoryClick(product.name.toLowerCase())}
              key={product.id}
            >
              <img
                src={product.img}
                className="product-img  w-full transition-transform d uration-1000 ease-in-out transform group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center ">
                <div className="bg-white bg-opacity-60 p-4 text-black text-opacity-100 flex flex-col items-center  transition-opacity duration-500 ease-in-out group-hover:bg-opacity-80 gap-2 w-2/3 ">
                  <h1 className="font-bold">{product.name}</h1>
                  <h2 className="font-thin text-md">SHOP NOW</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainMenu;
