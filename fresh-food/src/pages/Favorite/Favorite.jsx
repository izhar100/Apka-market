import React, { useEffect, useState } from "react";
import FavoriteProduct from "../../components/FavoriteProduct";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartReducer/action";
import { useToast } from "@chakra-ui/react";

const Favorite = () => {
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  const favoriteData = useSelector((store) => store);
  const toast=useToast()

  useEffect(() => {
    const updateddata = JSON.parse(localStorage.getItem("favorite")) || [];
    console.log("from local storage", data);

    setData(updateddata);
  }, []);

  console.log(favoriteData, "favoriteData before rendering");

  const handleDelete = (productId) => {
    const updatedData = data.filter((item) => item.id !== productId);
    setData(updatedData);
    localStorage.setItem("favorite", JSON.stringify(updatedData));
    toast({
      title: 'Product deleted from favorite.',
      status: 'error',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  };

  // Check if favoriteData is empty or not available yet
  // if (favoriteData.length === 0) {
  //   return <div>Loading...</div>; // Display a loading indicator
  // }

  const handleAddToCart = (item) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    dispatch(addToCart(item));
    toast({
      title: 'Product Added to cart.',
      status: 'success',
      duration: 3000,
      isClosable: true,
      position:'top'
    })
  };

  return (
    <div className="w-[80%] sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-10 gap-6 justify-center items-center mx-auto justify-items-center">
      {data.map((item) => (
        <FavoriteProduct
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          onDelete={() => handleDelete(item.id)} // Pass onDelete prop and handleDelete as the callback
          handleAddBasket={() => handleAddToCart(item)}
        />
      ))}
    </div>
  );
};

export default Favorite;
