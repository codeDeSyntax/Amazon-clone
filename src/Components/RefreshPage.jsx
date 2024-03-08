// import { useState } from "react";
// import { useState , useEffect } from "react";
import AutoTypingText from "./Autotype";
const RefreshPage = () => {
  // const[imageIndex , setImageIndex] = useState(0)
// let images = [
//   'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D'     ,
//   'https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvZmF8ZW58MHx8MHx8fDA%3D',

//   'https://images.unsplash.com/photo-1622126807280-9b5b32b28e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D'
// ]
 
// useEffect(() => {
//   const interval = setInterval(() => {
//     const index = Math.floor(Math.random(1)*images.length);
//     setImageIndex(index)
//   }, 9000);

//   return () => clearInterval(interval);
// }, [images.length]);

  return (
    <div className="flex flex-col w-full ">
      <figure className={`bg-[url(https://media.istockphoto.com/id/1442114044/photo/brown-suede-leather-armchair-brass-side-table-and-pastel-green-wooden-cabinet-in-modern-and.webp?b=1&s=170667a&w=0&k=20&c=gVeZgjM5uoEPlGhvGBZaQuRu5IpkXPPQvJWyRsNmqM4=)] h-[35vh] bg-cover bg-no-repeat w-full m-auto justify-end flex items-center  p-2 mt-24`} >
       <div className="flex  flex-col gap-1">
      <AutoTypingText text="Refresh your space" speed={100}/>
        <p className="text-[#1b222b] text-[.6rem]">shop the Home store</p>
        <button className="p-1 w-[90px] rounded-sm bg-[#FF9900] text-white ">Learn more{} </button>
       </div>
      </figure>
      
      <div className="w-[95%] m-auto">
      
      </div>
    </div>
  );
   // colors: {
    //   'almostblack':'#141B24',
    //   'seablue':'#00A8E1',
    //   'almostwhite':'#EEF3F9',
    //   'orangee':'#FF9900',
    //   'yello':'#FFB700'
    // },
};

export default RefreshPage;
