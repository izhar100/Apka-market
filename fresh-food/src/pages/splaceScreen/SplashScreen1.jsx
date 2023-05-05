import React from "react";
import SplashButton from "../../components/SplashButton";
import image_1 from "../../../src/asset/image_1.png";

const SplashScreen1 = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-green-300 to-transparent flex flex-col justify-end ">
      <div className="flex-grow">
        <div className="md:mt-32 mt-48 font-sans">
          <h1 className="text-6xl m-2 text-[#29c250]">Fresh Food</h1>
          <h3 className="text-xl m-3">Grocery Shop</h3>
        </div>
      </div>
      <div className="flex-shrink-0">
        <img
          className="mx-auto h-3/5 md:h-[550px] w-3/5 m-10"
          src={image_1}
          alt="splash1"
        />
        <div className="self-end font-sans">
          <SplashButton title="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default SplashScreen1;
