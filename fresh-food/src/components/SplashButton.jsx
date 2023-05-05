import React from "react";

const SplashButton = ({ title }) => {
  return (
    <button className="w-[80%] text-white mx-auto bg-[#29c250] md:bg-none p-2 rounded-3xl md:bg-transparent text-2xl md:text-[#29c250]">
      {title}
    </button>
  );
};

export default SplashButton;
