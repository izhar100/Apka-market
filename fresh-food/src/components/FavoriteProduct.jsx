import React from "react";
import { SlBasketLoaded } from "react-icons/sl";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartReducer/action";

const FavoriteProduct = ({
  name,
  image,
  price,
  quantity,
  onDelete,
  id,
  handleAddBasket,
  item,
}) => {
  const dispatch = useDispatch();
  const [handleDeletClick, setHandleDeleteClick] = useState(false);

  const trimmedName = name.length ? name.substring(0, 20) + "..." : name;
  const handleAddToCart = () => {
    const product = {
      id,
      name,
      image,
      price,
      quantity,
    };
    dispatch(addToCart(product));
  };

  return (
    <div
      className="bg-[#f4f4f4] p-2 sm:flex-none md:flex-none lg:flex-none m-2 xs:flex items-center rounded-5 hover:scale-105 duration-500"
      onClick={() => setHandleDeleteClick(!handleDeletClick)}
    >
      <div className="xs:w-[30%] sm:w-[80%] mx-auto p-3">
        <img className="w-full rounded-full" src={image} alt="img" />
      </div>
      <div className="xs:w-[50%] font-sans">
        <p className="text-xs md:text-base">₹ {price}</p>
        <p className="text-xs md:text-base">{trimmedName}</p>
        <p className="text-xs md:text-base">{quantity} kg</p>
      </div>
      <div className="xs:w-[20%] flex sm:justify-around m-4">
        <SlBasketLoaded
          size={40}
          className="hover:bg-[green] pr-1"
          onClick={() => handleAddBasket(item)}
        />
        <AiOutlineDelete
          size={40}
          className="sm:block hidden hover:bg-[red]"
          onClick={() => onDelete(id)}
        />
      </div>

      <div
        className={`hidden ${
          handleDeletClick ? "xs:block" : ""
        } transition-transform duration-500 transform ${
          handleDeletClick ? "translate-y-0" : "-translate-x-full"
        }`}
      >
        <AiOutlineDelete
          size={40}
          className="hover:bg-[red]"
          onClick={() => onDelete(id)}
        />
      </div>
    </div>
  );
};

export default FavoriteProduct;
