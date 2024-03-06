import Nav from "./src/Components/Nav"
import Products from "./src/Components/Products"
import RecentSearch from "./src/Components/RecentSearch"
import RefreshPage from "./src/Components/RefreshPage"
import { useState } from "react"

const Amazon = () => {
  const [query, setQuery] = useState("");
  const [productID, setProductID] = useState(null);
  return (
    <div className="bg-white">
    <Nav query={query} setQuery={setQuery} productID={productID} setProductID={setProductID}/>
    <RefreshPage/>
    <RecentSearch/>
    <Products query={query} setQuery={setQuery}/>
    </div>
  )
}

export default Amazon