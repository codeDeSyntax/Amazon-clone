// import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AutoTypingText from "./Autotype";
import Slider from "react-slick";

const RefreshPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  // const [imageIndex, setImageIndex] = useState();
  // const images = [
  //   "https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg",
  //   "https://m.media-amazon.com/images/I/61Pdr3h6MmL._SX3000_.jpg",
  //   "https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg",
  //   "https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg",
  //   "https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg",
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImageIndex(Math.floor(Math.random() * images.length));
  //   }, 6000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    // <div className="flex flex-col w-full">
    //   <figure
    //     className={`xxs:bg-[url(https://media.istockphoto.com/id/1500485322/photo/white-wall-interior-living-room-have-orange-leather-sofa-and-decoration-minimal.webp?b=1&s=170667a&w=0&k=20&c=yaF08QX4PLcTCBy0UiA05N_BVKGJobepSpzRNrS0lGo=)] md:pr-80
    //     md:bg-[url(https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg)] xxs:h-[35vh] bg-cover bg-no-repeat w-full m-auto justify-end flex items-center p-2 mt-24 transition`}
    //   >
    //     <div className="flex flex-col gap-1">
    //       <AutoTypingText
    //         text="Refresh your space"
    //         speed={100}
    //         className="md:text-3xl"
    //       />
    //       <p className="text-[#928c8c] md:text-[.7rem] text-[.6rem]">
    //         shop the Home store
    //       </p>
    //       <button className="p-1 w-[90px] rounded-sm bg-[#FF9900] text-white ">
    //         Learn more
    //       </button>
    //     </div>
    //   </figure>
    //   <div className="w-[95%] m-auto"></div>
    // </div>

    <div className="w-full h-[40vh] bg-red-500  ">
      <Slider {...settings} className="bg-green-500 ">
        <div className="bg-[url(https://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpghttps://m.media-amazon.com/images/I/71VBt4eTg3L._SX3000_.jpg)]  md:h-[50vh] h-[40vh] bg-contain md:bg-cover">
          <h3>1</h3>
        </div>
        <div className="bg-[url(https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg)]  md:h-[50vh] h-[40vh] bg-contain md:bg-cover">
          <h3>1</h3>
        </div>
        <div className="bg-[url(https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg)]  md:h-[50vh] h-[40vh] bg-contain md:bg-cover">
          <h3>1</h3>
        </div>
        <div className="bg-[url(https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg)]  md:h-[50vh] h-[40vh] bg-contain md:bg-cover">
          <h3>1</h3>
        </div>
        <div className="bg-[url(https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg)]  md:h-[50vh] h-[40vh] bg-contain md:bg-cover">
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  );
};

export default RefreshPage;
