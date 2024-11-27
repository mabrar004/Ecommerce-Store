// HATS IMGS
import img1 from "../assets/hat-imgs/img1.jpg";
import img2 from "../assets/hat-imgs/img2.jpg";
import img3 from "../assets/hat-imgs/img3.jpg";
import img4 from "../assets/hat-imgs/img4.jpg";
// JACKETS IMGS
import img5 from "../assets/jacket-imgs/img5.jpg";
import img6 from "../assets/jacket-imgs/img6.jpeg";
import img7 from "../assets/jacket-imgs/img2.jpg";
import img8 from "../assets/jacket-imgs/img3.jpeg";
// SNICKERS IMGS
import img9 from "../assets/sniicker-imgs/snicker1.jpg";
import img10 from "../assets/sniicker-imgs/snicker2.jpg";
import img11 from "../assets/sniicker-imgs/snicker3.jpg";
import img12 from "../assets/sniicker-imgs/snicker4.jpg";
// MEN IMGS
import img13 from "../assets/Men-imgs/men1.jpeg";
import img14 from "../assets/Men-imgs/men2.jpeg";
import img15 from "../assets/Men-imgs/men3.jpeg";
import img16 from "../assets/Men-imgs/men4.jpeg";
// WOMEN IMGS
import img17 from "../assets/women-imgs/women1.jpg";
import img18 from "../assets/women-imgs/women2.jpg";
import img19 from "../assets/women-imgs/women3.jpg";
import img20 from "../assets/women-imgs/women4.jpeg";

import { createContext, useState } from "react";

export const CartContext = createContext({
  selectedItems: [],
  products: [],
  CATEGORY_PRODUCTS: {},
  handleAddItems: () => {},
  handleDeleteItems: () => {},
});

export const CartContextProvider = ({ children }) => {
  const CATEGORY_PRODUCTS = {
    hats: [
      { img: img1, name: "Hat 1", price: "20", quantity: 1 },
      { img: img2, name: "Hat 2", price: "25", quantity: 1 },
      { img: img3, name: "Hat 3", price: "30", quantity: 1 },
      { img: img4, name: "Hat 4", price: "35", quantity: 1 },
    ],
    jackets: [
      { img: img5, name: "Jacket 1", price: "50", quantity: 1 },
      { img: img6, name: "Jacket 2", price: "55", quantity: 1 },
      { img: img7, name: "Jacket 3", price: "60", quantity: 1 },
      { img: img8, name: "Jacket 4", price: "65", quantity: 1 },
    ],
    sneakers: [
      { img: img9, name: "Sneaker 1", price: "70", quantity: 1 },
      { img: img10, name: "Sneaker 2", price: "75", quantity: 1 },
      { img: img11, name: "Sneaker 3", price: "80", quantity: 1 },
      { img: img12, name: "Sneaker 4", price: "85", quantity: 1 },
    ],
    mens: [
      { img: img13, name: "Men's Shirt 1", price: "40", quantity: 1 },
      { img: img14, name: "Men's Shirt 2", price: "45", quantity: 1 },
      { img: img15, name: "Men's Shirt 3", price: "50", quantity: 1 },
      { img: img16, name: "Men's Shirt 4", price: "55", quantity: 1 },
    ],
    womens: [
      { img: img17, name: "Women's Dress 1", price: "60", quantity: 1 },
      { img: img18, name: "Women's Dress 2", price: "65", quantity: 1 },
      { img: img19, name: "Women's Dress 3", price: "70", quantity: 1 },
      { img: img20, name: "Women's Dress 4", price: "75", quantity: 1 },
    ],
  };
  const products = [
    {
      title: "HATS",
      name: ["Hat 1", "Hat 2", "Hat 3", "Hat 4"],
      price: ["20", "25", "30", "35"],
      img: [img1, img2, img3, img4],
    },
    {
      title: "JACKETS",
      name: ["Jacket 1", "Jacket 2", "Jacket 3", "Jacket 4"],
      price: ["50", "55", "60", "65"],
      img: [img5, img6, img7, img8],
      quantity: 1,
    },
    {
      title: "SNICKERS",
      name: ["Snicker 1", "Snicker 2", "Snicker 3", "Snicker 4"],
      price: ["70", "75", "80", "85"],
      img: [img9, img10, img11, img12],
      quantity: 1,
    },
    {
      title: "MEN",
      name: ["Men Item 1", "Men Item 2", "Men Item 3", "Men Item 4"],
      price: ["40", "45", "50", "55"],
      img: [img13, img14, img15, img16],
      quantity: 1,
    },
    {
      title: "WOMEN",
      name: ["Women Item 1", "Women Item 2", "Women Item 3", "Women Item 4"],
      price: ["35", "40", "45", "50"],
      img: [img17, img18, img19, img20],
      quantity: 1,
    },
  ];

  const [selectedItems, setSelectedItems] = useState([]);

  const handleAddItems = (updatedProduct) => {
    console.log(updatedProduct);
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.name === updatedProduct.name
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === updatedProduct.name ? updatedProduct : item
        );
      } else {
        return [...prevItems, updatedProduct];
      }
    });
  };

  const handleDeleteItems = (productName) => {
    console.log(`product name delete ${productName}`);
    const deleteItem = selectedItems.filter(
      (item) => item.name !== productName
    );
    setSelectedItems(deleteItem);
  };

  return (
    <CartContext.Provider
      value={{
        selectedItems,
        products,
        handleAddItems,
        CATEGORY_PRODUCTS,
        handleDeleteItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
