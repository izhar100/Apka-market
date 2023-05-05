import React, { useEffect, useState } from "react";
import FavoriteProduct from "../../components/FavoriteProduct";
const Favorite = () => {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    fetch("https://fine-puce-hippo-gown.cyclic.app/product")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-[80%] sm:grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-10 gap-6 justify-center items-center mx-auto justify-items-center">
      {data.map((item) => (
        <FavoriteProduct
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};
export default Favorite;
