// import { useState } from "react";
import AutoTypingText from "./Autotype";
const RefreshPage = () => {
  // const[ruuningText , setRunningText] =useState('')
 

  return (
    <div className="flex flex-col w-full">
      <figure className="bg-[url(https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?q=80&w=906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[35vh] bg-cover bg-no-repeat  w-full m-auto justify-end flex items-center bg-center p-2" >
       <div className="flex  flex-col gap-1">
      <AutoTypingText text="Refresh your space" speed={100}/>
        <p className="text-[#1b222b] text-[.6rem]">shop the Home store</p>
        <button className="p-1 w-[90px] rounded-sm bg-[#FF9900] text-white ">Learn more</button>
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
