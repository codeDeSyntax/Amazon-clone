import  { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";

const Products = ({ query }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) =>
        console.error("Error fetching products:", error)
      );

    FetchCategories();
  }, []);

  const FetchCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) =>
        console.error("Error fetching categories:", error)
      );
  };

  const Placesearch = () => {
    const FilteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(query.toLowerCase());
    });

    return (
      FilteredProducts.map((product) => (
        <div key={product.id} className="flex flex-col h-60 w-40 shadow-xl border p-2 ">
          <img src={product.image} alt="" className="size-20 " />
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
        </div>
      ))
    );
  };

  return (
    <section className=" w-full flex flex-col justify-center items-center">
      <div className="my-4 w-[95%] m-auto flex justify-center gap-1">
        {categories.map((category, index) => (
          <button key={index} className="text-[.8rem] p-[3px] border " >{category}</button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3  justify-center items-center ">
        {query ? <Placesearch /> :
          products.map((product) => {
            return (
              <div key={product.id} className="flex flex-col h-60 w-40 shadow-xl border p-2 ">
                <img src={product.image} alt="" className="size-20 " />
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
              </div>
            );
          })}
      </div>
    </section>
  );
};

Products.propTypes = {
  query: PropTypes.string.isRequired,
};

export default Products;
