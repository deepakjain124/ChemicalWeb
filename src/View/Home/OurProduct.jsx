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
        <p className="text-3xl  font-semibold border-b-4 border-  border-b-primary">
          Our Products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-8 place-items-center">
       {ProductList.map((i,index)=>{
        return (
             <div key={index} className="bg-white  hover:shadow-xl  transition  shadow-black flex justify-center items-center flex-col p-5">
          <img
            src={images.dolomite}
            alt="product"
            className="w-24 rounded-full h-w-24"
          />
          <p className="font-semibold text-primary">{i.label}</p>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna erat, .</p>
          <p onClick={()=>navigate("/productDesc",{state:{name:i.label}})} className="border border-primary bg-primary cursor-pointer text-black hover:bg-white p-3 mt-4 transition-all">Read More</p>
        </div>
        )
       })}
      </div>
    </>
  );
};

export default OurProduct;
