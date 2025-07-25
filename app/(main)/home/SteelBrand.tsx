'use client';

import React, { useState } from 'react';
import clsx from 'clsx';

const SteelBrand = () => {
  return (
    // <section className="bg-[#f7f7f7] py-12 px-4 text-[#444]">
    //   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    //     {/* Left content */}
    //     <div>
    //       <div className="relative inline-block mb-4">
    //         <div className="bg-[#009fe3] text-white font-semibold py-2 px-4 pr-6 text-sm uppercase rounded-sm">
    //           Chất lượng Thép Tây Đô
    //         </div>

    //     {/* <img src="/images/product/steel.png" alt="" /> */}
    //     < img src="/images/product/steel.svg" alt="" />
    //       </div>
    //     </div >
    //   </div >
    // </section >

    <section className="bg-[#f7f7f7] py-12 px-4 text-[#444]">
      <div className="max-w-7xl mx-auto  gap-8 items-center">
        {/* Left content */}
        <div>
          <div className="relative inline-block mb-4">
            <div className="bg-[#009fe3] text-white font-semibold py-2 px-4 pr-6 text-sm uppercase rounded-sm">
              Chất lượng Thép Tây Đô
            </div>
            {/* <div className="absolute right-0 top-0 w-0 h-0 border-t-[40px] border-t-transparent border-l-[40px] border-l-[#009fe3] border-b-[40px] border-b-transparent -mt-[20px]"></div> */}
          </div>

          <p className="text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid natus voluptatem fugiat sed nesciunt deserunt consectetur eius fugit, facere quam praesentium vero ex quas mollitia rem reiciendis magnam accusantium dolores!
          </p>

          <div className="mt-4">
            {/* <object type="image/svg+xml" data="/images/product/steel.svg"></object> */}

            < img src="/images/product/steel.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SteelBrand;