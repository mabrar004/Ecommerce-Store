import { useContext } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../store/ContextProvider";
const Navbar = () => {
  const { selectedItems } = useContext(CartContext);
  return (
    <>
      <nav id="Navbar" className="flex justify-between my-10 mx-24">
        <Link to="/">
          <img src="" alt="" />
          <span className="text-2xl">Fusion Store</span>
        </Link>
        {/* right side content */}
        <div className="flex gap-9 items-center ">
          <Link to="/Shop">SHOP</Link>
          <Link to="/Contact">CONTACT</Link>
          <Link to="/SignIn">SIGN IN</Link>
          <Link to="/Cart" className="text-2xl relative">
            <BsBag className="text-gray-800" />

            {selectedItems.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {selectedItems.length}
              </span> 
            )}
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
