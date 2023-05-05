import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// "id":4,
// "name":"Fresho Tomato - Hybrid (Loose)",
// "image":"https://www.bigbasket.com/media/uploads/p/l/10000200-2_2-fresho-tomato-hybrid.jpg",
// "category":"vegetables",
// "price":20,
// "quantity":1

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  const product = async () => {
    const data = await axios
      .get(`https://fine-puce-hippo-gown.cyclic.app/product/${id}`)
      .then((product) => setSingleProduct(product.data));
    return data;
  };

  useEffect(() => {
    product();
  }, []);

  return (
    <div className="w-[70%] mx-auto">
      <h1
        className="text-3xl font-bold font-sans mt-5 mb-10
       m-3"
      >
        Product Details
      </h1>
      <div className="md:flex justify-center">
        <div className="flex-1">
          <img
            className="p-1 w-[60%] md:w-[60%] hover:scale-105 duration-500 block mx-auto"
            src={singleProduct.image}
            alt="tomato"
          />
          <div className="flex justify-center mb-4">
            <button className="font-bold my-2 mx-1 text-2xl">+</button>
            <p className="font-bold my-2 mx-1 text-2xl">Quantity 1</p>
            <button className="font-bold my-2 mx-1 text-2xl">-</button>
          </div>
          <div className="flex justify-center gap-3">
            <button className="bg-[red] text-[white] p-2 font-sans hover:bg-yellow-400">
              Add To Card
            </button>
            <button className="bg-[green] text-[white] px-4 py-2  font-sans  hover:bg-yellow-400">
              Buy Now
            </button>
          </div>
        </div>
        <div className="m-2 p-2 flex-1">
          <h1 className="font-sans font-bold text-2xl">{singleProduct.name}</h1>
          <h2 className="font-sans font-normal text-xl">
            Categogy : {singleProduct.category}
          </h2>
          <p className="font-sans">
            Organic Apples: These crisp and juicy apples are grown without the
            use of synthetic pesticides or fertilizers, making them a healthy
            and environmentally-friendly choice for snacking or baking.
          </p>
          <h2 className="font-sans font-normal text-xl">
            Price : ₹ {singleProduct.price}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
