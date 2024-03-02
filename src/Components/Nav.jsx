import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar(true);
  };
  const cart = 4;
  return (
    <nav className="navbar bg-[#141B24] flex flex-col pt-3 gap-4">
      <div className="flex justify-between items-center w-full">
        <FaBars className="text-2xl" onClick={toggleSideBar} />
        <div>
          <figure className="flex items-center">
            <img src="Amazon1.jpg" alt="logo" className="h-8 " />
            <figcaption className="font-bold ">Amazon</figcaption>
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[10px]  bg-[white] rounded-full w-4 text-center text-[#141B24]">
            {cart}
          </p>
          <FaShoppingCart className={`text-[#FF9900] text-xl ${cart > 0 && 'animate-pulse'}`} />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[100%] m-auto flex items-center justify-center">
          <input
            type="text"
            className="p-3 w-[80%] bg-[white]"
            placeholder="search.."
          />
          <button className="p-4 bg-[#FF9900] text-[white] w-[15%]">
            <FaSearch />
          </button>
        </div>
      </div>
      {sideBar && (
        <div className="absolute top-0 left-0 w-[80%]  bg-[#141B24] ">
          <div className="flex w-full justify-end items-center h-14">
          <FaTimes className="" onClick={() => {
            setSideBar(false)
          }}/>
          </div>

        </div>
      )}
    </nav>
  );
};

export default Nav;
