import React from "react";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-2 p-5 md:grid-cols-2 lg:grid-cols-4  text-white bg-primary h-full place-items-center">
        <div className="Location text-start">
          <p className="font-semibold text-[15px] mt-5">Location</p>
         <div className="text-[13px]">
         <p>F91,MIA</p>
          <p>Alwar Rajasthan,301001</p>
         </div>
          <div className="flex justify-center gap-5 mt-4 items-center">
            <FacebookOutlined className="border border-white hover:bg-white hover:text-primary transition-all rounded-full p-2" />
            <InstagramOutlined className="border border-white hover:bg-white hover:text-primary transition-all rounded-full p-2" />
            <TwitterOutlined className="border border-white hover:bg-white hover:text-primary transition-all rounded-full p-2" />
          </div>
        </div>
        <div className="Contact text-start">
          <p className="font-semibold text-[15px] mt-5">Contact Info</p>
         <div className="text-[13px]">
         <p>Give us a call</p>
          <p>+91 92143 48850</p>
          <p>+91 92143 48850</p>
          <p>+91 92143 48850</p>
         </div>
        </div>
        <div className="Contact">
          <p className="font-semibold text-[15px] mt-5">Want To Join Us?</p>
          <input
            className=" bg-white px-4 text-black hover:border-none  border-b border-white hover:outline-none text-xs w-full h-12"
            placeholder="Enter Your Email"
          />
          <p className="bg-yellow-500 p-2 mt-2 rounded-sm cursor-pointer text-xs text-center hover:bg-white hover:text-black transition-all">
            Subscribe
          </p>
        </div>
        <div className="product cursor-pointer">
          <p className="font-semibold text-[15px] mt-5">Our Products</p>
         <div className="text-[13px]">
         <p>Calcite Powder</p>
          <p>Soap Stone</p> <p>China Clay</p> <p>Dolomite Powder</p>{" "}
          <p>Silica Sand</p> <p>Calcium Choride</p> <p>Tiles </p><p>Crazy</p>
         </div>
        </div>

      </div>
      <div className="bg-primary flex justify-end items-center gap-4 text-right p-4 text-[13px] text-white">
       
       {/* <img src={images.techquark} className="w-16 h-10"/> */}
        <p>Powered By TechQuark</p>
      </div>
    </>
  );
};

export default Footer;
