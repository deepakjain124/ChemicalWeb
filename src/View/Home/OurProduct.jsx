import React from "react";
import { images } from "../../Assets";
import { useNavigate } from "react-router-dom";
import { ProductList } from "../ProductList";

const OurProduct = () => {
  const navigate=useNavigate()
  return (
    <>
      <div className="flex justify-center items-center flex-col heading mt-4">
        <p className="text-xl text-primary ">Products</p>
        <p className="text-3xl  font-semibold border-b-4 border-  border-b-yellow-400">
          Our Products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8 place-items-center">
       {ProductList.map((i,index)=>{
        return (
             <div key={index} className="bg-white shadow-sm shadow-gray-400  hover:shadow-md  transition  hover:shadow-gray-600 flex justify-center items-center flex-col p-5">
          <img
            src={i.img?i.img:images.dolomite}
            alt="product"
            className="w-24 rounded-full h-24"
          />
          <p className="font-semibold text-primary">{i.label}</p>
          <p className="text-center">{i.desc}</p>
          <p onClick={()=>navigate("/productDesc",{state:{name:i.label}})} className=" bg-primary rounded-md shadow-lg hover:text-white shadow-gray-300 cursor-pointer text-white hover:bg-yellow-500 p-3 mt-4 transition-all">Read More</p>
        </div>
        )
       })}
      </div>
    </>
  );
};

export default OurProduct;
