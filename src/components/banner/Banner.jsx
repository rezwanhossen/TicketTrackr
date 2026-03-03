import React from "react";
import vectoe1 from "/vector1.png";
import vectoe2 from "/Clip path group.png";

const Banner = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      <div className=" hero min-h-75 rounded-xl relative bg-linear-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden">
        <img
          src={vectoe1}
          className=" absolute left-0 top-0 w-full h-full "
          alt="shap"
        />
        <img
          src={vectoe2}
          className=" absolute right-0 top-0 w-full h-full"
          alt="shap"
        />
      </div>
    </div>
  );
};

export default Banner;
