import Nav from "./src/Components/Nav";
import Products from "./src/Components/Products";
import RecentSearch from "./src/Components/RecentSearch";
import RefreshPage from "./src/Components/RefreshPage";
import { useState } from "react";
import Footer from "./src/Components/Footer";

const Amazon = () => {
  const [query, setQuery] = useState("");
  const [productID, setProductID] = useState(null);
  const[cart , setCart] = useState([]);
  const[displayCart , setDisplayCart] = useState(false)
  return (
    <div className=" w-full">
      <Nav
        query={query}
        setQuery={setQuery}
        productID={productID}
        setProductID={setProductID}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        cart={cart} />
      
      <RefreshPage />
      <RecentSearch />
      <Products query={query} setQuery={setQuery} cart={cart}  setCart={setCart} displayCart={displayCart}/>
      <Footer/>
    </div>
  );
};

export default Amazon;
