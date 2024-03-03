import { useState } from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import { FaShoppingCart ,FaStar } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const Nav = ({query , setQuery}) => {
  const [sideBar, setSideBar] = useState(false);
  
  const [products, setProducts] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleSideBar = () => {
    setSideBar(true);
  };

   const GrabInput = (e) => {
    setQuery(e.target.value);

    const filteredProducts = products.filter((product) => {
      product.title.localeCompare(query)
    })

    return(
      filteredProducts.map((product) =>(
        <div key={product.id} className='flex flex-col h-60 w-40 shadow-xl border p-2 '>
        <img src={product.image} alt="" className='size-20 ' />
        <div className='w-full h-12'>
        <p className='text-[.7rem] mt-1'>{product.title.substr(0,30)}
        </p>
        </div>
        <del>20% off</del>
        <p>Ghc <span className='font-bold text-[#141B24]'> {product.price}</span></p>

        {/* <div><FaStar/> *{ Math.floor(product.rating.rate)}</div> */}
        <div className='flex items-center gap-1'>
            <FaStar className='text-[#FF9900]' />
            <FaStar className='text-[#FF9900]'/>
            <FaStar className='text-[#FF9900]'/>
            <FaStar/>
            <FaStar/>
        </div>
        
    </div>
      ))
    )
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // const handleCategoryChange = (category) => {
  //   setSelectedCategory(category);
  // };

  // const filteredProducts = selectedCategory
  //   ? products.filter((product) => product.category === selectedCategory)
  //   : products;

  const cart = 4;
  return (
    <nav className="navbar bg-[#141B24] flex flex-col pt-3 gap-4">
      <div className="flex justify-between items-center w-full">
        <FaBars className="text-2xl" onClick={toggleSideBar} />
        <div>
          <figure className="flex items-center">
            <img src="Amazon1.jpg" alt="logo" className="h-8 " />
            <figcaption className="font-bold ">Amazon </figcaption>
          </figure>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-[10px]  bg-[white] rounded-full w-4 text-center text-[#141B24]">
            {cart}
          </p>
          <FaShoppingCart
            className={`text-[#FF9900] text-xl ${cart > 0 && "animate-pulse"}`}
          />
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-[100%] m-auto flex items-center justify-center">
          <input
            type="text"
            className="p-3 w-[80%] bg-[white]"
            placeholder="search.."
            onChange={GrabInput}
          />
          <button className="p-4 bg-[#FF9900] text-[white] w-[15%]">
            <FaSearch />{query}
          </button>
        </div>
      </div>
      {sideBar && (
        <div className="absolute top-0 flex flex-col left-0 w-[80%] h-screen px-2 bg-[#141B24] ">
          <div className="flex w-full justify-end items-center h-14">
            <FaTimes
              className="sticky"
              onClick={() => {
                setSideBar(false);
              }}
            />
          </div>
          {/* <label>
            <input type="radio" name="" id="" onClick={handleCategoryChange} />
            <span>All Categories</span>
          </label>
          <label>
            <input type="radio" name="" id="" onClick={handleCategoryChange} />
            <span>Electronics</span>
          </label>
          <label>
            <input type="radio" name="" id="" onClick={handleCategoryChange} />
            <span>Mens clothing</span>
          </label>
          <label>
            <input type="radio" name="" id="" onClick={handleCategoryChange} />
            <span>womens clothing</span>
          </label> */}
        </div>
      )}
    </nav>
  );
};


Nav.propTypes = {
  query: PropTypes.string,
  setQuery: PropTypes.func
}
export default Nav;
