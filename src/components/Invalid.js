import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";

const Invalid = () => {
  const [screen, setScreen] = useState(false);
  const stl = {
    invalid:
      "fixed h-[85vh] right-2 top-[15%] z-[100] lg:block hidden font-['Montserrat']",
    icon: `${screen ? "hidden" : "block"
      } w-[50px] h-[50px] rounded-full bg-white cursor-pointer absolute right-2 top-[90%]`,
    box: `${screen ? "block" : "hidden"
      } h-[98%] w-[400px] bg-black duration-300 transition pt-[10px]`,
    cross:
      "text-white ml-[10px] text-[20px] cursor-pointer  w-[30px] flex items-center justify-center bg-red-700 rounded-full",
    select:
      "bg-transparent w-[180px] h-[30px] border-[1px] border-white text-white outline-none ml-[30px] rounded-[10px]",
    option: "bg-black",
    acc: "text-white text-[25px] ml-[20px]",
    ul: "text-black bg-white h-[400px] mt-[30px] pt-[30px]",
    li: "w-[90%] m-auto flex justify-between mt-[10px] font-[600] border-b-[1px] border-gray-600",
    plus: "w-[20px] h-[20px] bg-black text-white flex items-center justify-center rounded cursor-pointer",
    h6: "w-[10px] font-[25px]",
  };
  return (
    <div className={stl.invalid}>
      {/* <div className={stl.invalid}>
        <div class="w-[100%] cursor-auto block h-[98%]  bg-black duration-300 transition pt-[10px]"><div class="flex items-center"><span class="text-white ml-[10px] text-[20px] cursor-pointer  w-[30px] flex items-center justify-center rounded-full"><h1 className="text-white hover:text-red-400 duration-400">✖</h1></span><select class="bg-transparent w-[180px] h-[30px] border-[1px] border-white text-white outline-none ml-[30px] rounded-[10px]"><option class="bg-black" value="">Eng</option><option class="bg-black" value="">Ru</option><option class="bg-black" value="">Uz</option></select>
          <h1 className="text-white ml-[190px] mt-[110px] text-[22px] absolute" >Accessibility</h1>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" class="text-white text-[25px] ml-[100px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><defs><clipPath><path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path></clipPath></defs><path className="cursor-pointer" d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z"></path><path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z"></path></svg><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-white text-[25px] ml-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><polyline points="7 8 3 12 7 16"></polyline><polyline points="17 8 21 12 17 16"></polyline><line x1="3" y1="12" x2="21" y2="12"></line></svg><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-white text-[25px] ml-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg></div>
          <ul class="mt-[80px] text-black bg-white h-[380px]  pt-[30px]"><li class="mb-[150px] cursor-pointer w-[90%] m-auto flex justify-between mt-[10px] font-[600] border-b-[1px] border-gray-600">Navigation Adjustment <span class="w-[20px] h-[20px] bg-black text-white flex items-center justify-center rounded cursor-pointer">➕</span></li>
            <div className={stl.div_in_invalid2}><h6 className={stl.h6}><AiFillEyeInvisible /></h6></div>
            <div className={stl.div_in_invalid1}><h6 className={stl.h6}><AiFillEyeInvisible /></h6></div>
            <div className={stl.div_in_invalid3}><h6 className={stl.h6}><AiFillEyeInvisible /></h6></div>
            <div className={stl.div_in_invalid4}><h6 className={stl.h6}><AiFillEyeInvisible /></h6></div>
            <li class="cursor-pointer w-[90%] m-auto flex justify-between mt-[10px] font-[600] border-b-[1px] border-gray-600 mb-[50px]">Color Adjustment <span class="w-[20px] h-[20px] bg-black text-white flex items-center justify-center rounded cursor-pointer">➕</span></li><li class="cursor-pointer w-[90%] m-auto flex justify-between mt-[10px] font-[600] border-b-[1px] border-gray-600">Content Adjustment <span class="w-[20px] h-[20px] bg-black text-white flex items-center justify-center rounded cursor-pointer">➕</span></li></ul><ul class="flex text-white text-[12px] w-full justify-around mt-[20px]"><li>Turn off</li><li>Accessibility Statement</li><li>Send Feedback</li></ul><p class="text-white text-[12px] m-auto w-full flex justify-center mt-[30px]">Powered by EqualWeb & Kadirov D</p></div>
      </div> */}
    </div>
  );
};

export default Invalid;
