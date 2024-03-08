import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const Cart = ({ cart }) => {
  return (
   <>
   
   {
     cart.map((product) => (
        <div
          key={product.id}
          className="flex flex-col h-62 xxs:w-[80vw] cs:w-[100%] xs:w-[45vw] sm:w-48 lg:w-66  md:h-72  md:w-64  xl:w-68 md:shadow-none border md:hover:bg-[#141B24] p-2  md:justify-center items-center md:hover:scale-125 hover:z-110 transition lg:hover:rounded-md m-auto "
        >
          <img
            src={product.image}
            alt=""
            className=" size-20 h-[90px] w-[95px] md:h-[100px] md:w-[100px] "
          />
          <div className="w-full h-12">
            <p className="text-[.7rem] mt-1 xxs:text-center">
              {product.title.substr(0, 30)}
            </p>
          </div>
  
          <div className="w-full  flex-grow xxs:text-center">
            <del className="text-[.7rem] md:text-center">20% off</del>
            <p className="xxs:text-center">
              Ghc{" "}
              <span className="font-bold text-[#4f5153] text-[.8rem] ">
                {" "}
                {product.price}
              </span>
            </p>
            <div className="flex items-center gap-1 xxs:justify-center ">
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar />
              <FaStar />
            </div>
            <div className="w-full flex justify-center ">
              <button className="p-1 bg-[#FF9900] text-black font-bold w-40 rounded-md mt-2">
                🛒 Remove
              </button>
            </div>
          </div>
        </div>
      ))
   }
   </>
  );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}
export default Cart;
