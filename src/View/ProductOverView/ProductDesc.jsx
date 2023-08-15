import React, { useEffect } from "react";
import Banner from "../Banner";
import { images } from "../../Assets";
import { useLocation } from "react-router-dom";

const ProductDesc = () => {
  const location=useLocation()
  const {name}=location.state

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },[])
  return (
    <>
     <div
        className="p-5 "
      >
      <Banner name={name}/>
      <div className="grid mt-4 grid-cols-1 md:grid-cols-2 place-items-start">
        <div>
          <img
            className="h-96 w-full rounded-md"
            src={images.contactbg}
            alt="benefit"
          />
        </div>
        <div className="m-12 md:m-10">
          <p className="font-bold text-4xl">Benefits</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="border border-gray-300 shadow-lg shadow-gray-400 mt-4 p-6">
        <p className="text-3xl font-bold">Physical Properties:</p>
        <div className="border-t-2 w-44  border-primary"></div>
            
      </div>
      <div className="border border-gray-300 shadow-lg shadow-gray-400 mt-4 p-6">
        <p className="text-3xl font-bold">Chemical Properties:</p>
        <div className="border-t-2 w-44  border-primary"></div>
        
      </div>
      </div>
    </>
  );
};

export default ProductDesc;
