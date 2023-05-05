import React from "react";

// "id":4,
// "name":"Fresho Tomato - Hybrid (Loose)",
// "image":"https://www.bigbasket.com/media/uploads/p/l/10000200-2_2-fresho-tomato-hybrid.jpg",
// "category":"vegetables",
// "price":20,
// "quantity":1

const SingleProduct = () => {
  return (
    <div className="w-[70%] mx-auto">
      <h1 className="text-3xl  font-sans mt-5 mb-1 ">Product Details</h1>
      <div className="md:flex justify-center items-center">
        <div className="flex-1">
          <img
            className="p-1 w-[90%] hover:scale-105 duration-500"
            src="https://www.bigbasket.com/media/uploads/p/l/10000200-2_2-fresho-tomato-hybrid.jpg"
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
          <h1 className="font-sans font-bold text-2xl">
            Fresho Cauliflower, 1 pc (approx. 400 to 600 g)
          </h1>
          <h2 className="font-sans font-normal text-xl">
            Categogy : vegetables
          </h2>
          <h2 className="font-sans font-normal text-xl">Price : 20</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
