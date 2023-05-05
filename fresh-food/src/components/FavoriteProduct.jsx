import React from "react";
import { SlBasketLoaded } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";

const FavoriteProduct = ({ name, image, price, quantity }) => {
  const [handleDeletClick, setHandleDeleteClick] = useState(false);

  const trimmedName = name.length ? name.substring(0, 20) + "..." : name;

  return (
    <div
      className="bg-[#f4f4f4] p-2 sm:flex-none md:flex-none lg:flex-none m-2 xs:flex items-center sm:hover:scale-110 duration-500"
      onClick={() => setHandleDeleteClick(!handleDeletClick)}
    >
      <div className="xs:w-[30%] sm:w-[80%] mx-auto p-3">
        <img className="w-full rounded-full" src={image} alt="img" />
      </div>
      <div className="xs:w-[50%]">
        <h4>{price}</h4>
        <h1>{trimmedName}</h1>
        <h3>{quantity} kg</h3>
      </div>
      <div className="xs:w-[20%] flex sm:justify-around m-4">
        <SlBasketLoaded size={40} />
        <AiOutlineDelete size={40} className="sm:block hidden" />
      </div>

      <div
        className={`hidden ${
          handleDeletClick ? "xs:block" : ""
        } transition-transform duration-500 transform ${
          handleDeletClick ? "translate-y-0" : "-translate-x-full"
        }`}
      >
        <AiOutlineDelete size={40} />
      </div>
    </div>
  );
};

export default FavoriteProduct;
