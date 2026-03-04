import React from "react";
import vectoe1 from "/vector1.png";
import vectoe2 from "/Clip path group.png";

const Banner = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      <div className=" hero min-h-60 rounded-xl relative bg-linear-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden">
        <img
          src={vectoe1}
          className=" absolute left-0 top-0 w-[40%] h-full object-cover "
          alt="shap"
        />
        <img
          src={vectoe2}
          className=" absolute right-0 top-0 w-[40%] h-full object-cover"
          alt="shap"
        />
        <div className=" hero-content text-center relative z-10">
          <div>
            <h1 className=" text-2xl font-bold">In-Progress</h1>
            <h1 className=" text-5xl font-bold">0</h1>
          </div>
        </div>
      </div>
      <div className=" hero min-h-60 rounded-xl relative bg-linear-to-r from-[#54CF68] to-[#00827A] overflow-hidden">
        <img
          src={vectoe1}
          className=" absolute left-0 top-0 w-[40%] h-full object-cover  pointer-events-none "
          alt="shap"
        />
        <img
          src={vectoe2}
          className=" absolute right-0 top-0 w-[40%] h-full object-cover pointer-events-none"
          alt="shap"
        />
        <div className=" hero-content text-center relative z-10">
          <div>
            <h1 className=" text-2xl font-bold">Resolved</h1>
            <h1 className=" text-5xl font-bold">0</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
