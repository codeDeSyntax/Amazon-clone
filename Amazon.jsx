import Nav from "./src/Components/Nav"
import Products from "./src/Components/Products"
import RecentSearch from "./src/Components/RecentSearch"
import RefreshPage from "./src/Components/RefreshPage"

const Amazon = () => {
  return (
    <div className="">
    <Nav/>
    <RefreshPage/>
    <RecentSearch/>
    <Products/>
    </div>
  )
}

export default Amazon