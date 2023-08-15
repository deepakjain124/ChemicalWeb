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
          <p className="font-semibold text-xl mt-5">Location</p>
          <p>165 scheme no. 4,</p>
          <p>Near P & T quarter,</p>
          <p>Alwar Rajasthan,301001</p>
          <div className="flex justify-center gap-5 mt-4 items-center">
            <FacebookOutlined className="border border-white hover:bg-white hover:text-primary transition-all rounded-full p-2" />
            <InstagramOutlined className="border border-white hover:bg-white hover:text-primary transition-all rounded-full p-2" />
            <TwitterOutlined className="border border-white hover:bg-white hover:text-primary transition-all rounded-full p-2" />
          </div>
        </div>
        <div className="Contact text-start">
          <p className="font-semibold text-xl mt-5">Contact Info</p>
          <p>Give us a call</p>
          <p>+91 123456789</p>
          <p>+91 123456789</p>
          <p>+91 123456789</p>
        </div>
        <div className="Contact">
          <p className="font-semibold text-xl mt-5">Want To Join Us?</p>
          <input
            className=" bg-primary border-b border-white hover:outline-none text-xs w-full h-12"
            placeholder="Enter Your Email"
          />
          <p className="bg-black p-2 mt-2 rounded-sm cursor-pointer text-xs text-center hover:bg-white hover:text-black transition-all">
            Subscribe
          </p>
        </div>
        <div className="product cursor-pointer">
          <p className="font-semibold text-xl mt-5">Our Products</p>
          <p>Calcium Powder</p>
          <p>Calcium Powder</p> <p>Calcium Powder</p> <p>Calcium Powder</p>{" "}
          <p>Calcium Powder</p> <p>Calcium Powder</p> <p>Calcium Powder</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
