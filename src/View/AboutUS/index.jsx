import React from "react";
import Banner from "../Banner";
import { images } from "../../Assets";

const AboutUS = () => {
  return (
    <div className="p-5 " >
      <Banner name="About Us" image={images.aboutus}/>
      <div className="grid mt-14 grid-cols-1 md:grid-cols-2 place-items-center">
        <div className="flex flex-wrap  justify-center gap-8 items-center">
          <div className="border-2 shadow shadow-gray-300 border-gray-400  flex flex-col justify-center items-center p-10">
            <p className="text-4xl font-bold">5+</p>
            <p className="text-2xl font-semibold">YEARS EXPERIENCE</p>
          </div>
          <div className="leading-8">
            <p className="text-primary">INTRODCTION OF US</p>
            <p className="font-extrabold text-xl md:text-3xl">HI-TECH MINERALS</p>
            <p className="font-extrabold text-xl md:text-3xl">& CHEMICALS</p>
          </div>
        </div>
        <div className="w-3/6 mt-4 md:mt-0 text-justify text-gray-500">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className=" mt-12 shadow-lg rounded-md shadow-gray-300 p-8 gap-4 grid grid-cols-1 lg:grid-cols-2 place-items-start">
        <div className="p-4 order-2">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="text-justify text-sm md:text-lg w-full lg:w-4/5 mt-4">
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
        <div className="w-full h-72 md:h-80 order-1 md:order-2">
          <img src={images.contactbg} alt="about" className="w-full h-full" />
        </div>
      </div>
      <div className=" mt-12 shadow-lg rounded-md shadow-gray-300 p-8 gap-4 grid grid-cols-1 lg:grid-cols-2 place-items-start">
        <div className="p-4 order-2">
          <h1 className="text-2xl font-bold">Company Policy</h1>
          <p className="text-justify text-sm md:text-lg w-full lg:w-4/5 mt-4">
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
        <div className="w-full h-72 md:h-80 order-1 md:order-2">
          <img src={images.contactbg} alt="about" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
