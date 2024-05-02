import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa";
const Cart = ({ cart, setCart }) => {
  const removeFromCart = (id) => {
    let filteredcart = cart.filter((product) => {
      return product.id !== id;
    });
    setCart(filteredcart);
  };

  return (
    <div className=" w-[95%] m-auto flex md:flex-row  flex-col-reverse">
      <div className=" md:w-[70%] p-4 flex flex-col gap-4  ">
        <div className="p-3 border rounded-t-md ">
          <h2 className="text-gray-600">items ({cart.length})</h2>
        </div>
        {cart.map((product) => (
          <div
            key={product.id}
            className="w-[100%] py-5 px-10 flex flex-col md:flex-row justify-between  border-b  "
          >
            <div className="md:w-[40%]  flex items-center justify-center">
              <figure className="w-[80%]">
                <img
                  src={product.image}
                  alt=""
                  className=" size-20  md:h-[100px] md:w-[100px] "
                />
              </figure>
              <div className="w-full h-12 flex flex-col">
                <p className="text-[.8rem] mt-1  text-gray-700 font-mono">
                  {product.title.substr(0, 30)}
                </p>
                <button
                  className="flex text-center items-center gap-2 text-[#ff9900]"
                  onClick={() => {
                    removeFromCart(product.id);
                  }}
                >
                  <FaTrash /> Remove
                </button>
              </div>
            </div>

            <div className=" xxs:text-center flex ">
              <del className="hidden sm:block text-[.7rem] md:text-[.9rem] md:text-center">
                20% off
              </del>
              <p className="xxs:text-center mt-5">
                Ghc{" "}
                <span className="font-bold text-[#4f5153] text-[.8rem] md:text-[1.1rem]">
                  {" "}
                  {product.price}
                </span>
              </p>

              <div className="w-full flex justify-center gap-5 mt-5 sm:mt-0">
                <button className=" h-10 w-10  bg-[#ff9900] text-white text-center text-2xl uppercase font-semibold  rounded-md mt-2">
                  -
                </button>
                <button className="p-1 bg-[#ff9900] text-white font-bold text-center  h-10 w-10 rounded-md mt-2">
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[100%] md:w-[30%] p-4 m-auto">
        <div className="w-[90%] md:h-80 border-0 sm:border px-3 flex flex-col gap-2 m-auto">
          <p className=" font-sefif p-3 bg-orange-100 m-1">Cart summary</p>
          <hr />
          <label htmlFor="" className="flex gap-3">
            Subtotal:
            <p className="font-bold">
              {" "}
              Ghc {cart.reduce((total, product) => total + product.price, 0)}
            </p>
          </label>
          <p>Discount: 0%</p>
          <del className="p-1 text-[.7rem] bg-orange-100 w-40">
            No free products
          </del>
          <button className="bg-[#FF9900] text-center text-white w-[90%] p-1 rounded-sm ">
            Checkout Ghc{" "}
            {cart.reduce((total, product) => total + product.price, 0)}
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default Cart;
