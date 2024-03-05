import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Products = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) =>
        console.error("Error fetching products:", error)
      );
  };

  const fetchCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) =>
        console.error("Error fetching categories:", error)
      );
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllCategoriesClick = () => {
    setSelectedCategory('');
  };

  const renderProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }

    if (query) {
      filteredProducts = filteredProducts.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));
      
    }

    if (filteredProducts.length === 0) {
        return (
          <div className="text-center mt-4">No products found.</div>
        );
      }     

    return filteredProducts.map((product) => (
      <div key={product.id} className="flex flex-col h-62 w-40 shadow-xl border p-2 ">
        <img src={product.image} alt="" className="h-26 w-16 " />
        <div className="w-full h-12">
          <p className="text-[.7rem] mt-1">
            {product.title.substr(0, 30)}
          </p>
        </div>
        <del>20% off</del>
        <p>Ghc <span className="font-bold text-[#141B24]"> {product.price}</span></p>
        <div className="flex items-center gap-1">
          <FaStar className="text-[#FF9900]" />
          <FaStar className="text-[#FF9900]" />
          <FaStar className="text-[#FF9900]" />
          <FaStar />
          <FaStar />
        </div>
        <div className="w-full flex justify-center">
          <button className="p-1 bg-[#FF9900] text-black font-bold w-40 rounded-md mt-2">🛒+</button>
        </div>
      </div>
    ));
  };

  return (
    <section className=" w-full flex flex-col justify-center items-center">
      <div className="my-4 w-[95%] m-auto flex justify-center gap-1">
        <button className="text-[.8rem] p-[3px] border" onClick={handleAllCategoriesClick}>All</button>
        {categories.map((category, index) => (
          <button key={index}
            className="text-[.8rem] p-[2.5px] border " 
            value={category} 
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3  justify-center items-center ">
        {renderProducts()}
      </div>
    </section>
  );
};

Products.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Products;
