import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
import "../../src/mediaQueries";

const Products = ({ query, productID }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    FetchProducts();
    FetchCategories();
    if (productID) {
      FetchProductById();
    }
  }, [productID]);

  const FetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  };

  const FetchCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  };

  const FetchProductById = () => {
    axios
      .get(`https://fakestoreapi.com/products/${productID}`)
      .then((response) => {
        setProducts([response.data]);
      })
      .catch((error) => {
        console.log("Error fetching product by ID:", error);
        setProducts([]); // Clear products if the product ID doesn't exist
      });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAllCategoriesClick = () => {
    setSelectedCategory("");
  };

  const renderProducts = () => {
    let filteredProducts = products;

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    if (query) {
      filteredProducts = filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (filteredProducts.length === 0) {
      return <div className="text-center mt-4">No products found.</div>;
    }

    return filteredProducts.map((product) => (
      <div
        key={product.id}
        className="flex flex-col h-62 xxs:w-[80%] xs:w-56 sm:w-48 lg:w-66  md:h-72 w-[85%] md:w-64  xl:w-68 md:shadow-none border hover:bg-[#141B24] p-2  md:justify-center items-center md:hover:scale-125 hover:z-110 transition lg:hover:rounded-md m-auto "
      >
        <img
          src={product.image}
          alt=""
          className=" size-20 h-[90px] w-[95px] md:h-[100px] md:w-[100px]"
        />
        <div className="w-full h-12">
          <p className="text-[.7rem] mt-1 md:text-center">
            {product.title.substr(0, 30)}
          </p>
        </div>

        <div className="w-full  flex-grow md:text-center">
          <del className="text-[.7rem] md:text-center">20% off</del>
          <p className="md:text-center">
            Ghc{" "}
            <span className="font-bold text-[#4f5153] text-[.8rem] ">
              {" "}
              {product.price}
            </span>
          </p>
          <div className="flex items-center gap-1 md:justify-center">
            <FaStar className="text-[#FF9900]" />
            <FaStar className="text-[#FF9900]" />
            <FaStar className="text-[#FF9900]" />
            <FaStar />
            <FaStar />
          </div>
          <div className="w-full flex justify-center ">
            <button className="p-1 bg-[#FF9900] text-black font-bold w-40 rounded-md mt-2">
              🛒+
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className=" w-full flex flex-col justify-center items-center">
      {/* Category buttons */}
      <div className="my-4 w-[95%] m-auto flex justify-center gap-1 ">
        {/* All category button */}
        <button
          className="text-[.8rem] p-[3px] border md:w-[6rem]"
          onClick={handleAllCategoriesClick}
        >
          All
        </button>
        {/* Individual category buttons */}
        {categories.map((category, index) => (
          <button
            key={index}
            className="text-[.8rem] p-[2.5px] border md:w-[20rem]"
            value={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Render products */}
      <div className="w-full grid xxs:grid-cols-1  grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-1 md:gap-2 justify-center items-center mt-10 ">
        {renderProducts()}
      </div>
    </section>
  );
};

Products.propTypes = {
  query: PropTypes.string.isRequired,
  productID: PropTypes.number,
};

export default Products;
