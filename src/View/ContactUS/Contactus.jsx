import React from "react";
import { MailOutlined, ContactsFilled, PhoneOutlined } from "@ant-design/icons";
import Banner from "../Banner";
import { images } from "../../Assets";
import { Button } from "antd";
import Footer from "../Footer/Footer";
const Contactus = () => {
  return (
    <>
      <div
        className="p-5 "
      >
<Banner name="Contact Us" image={images.contactbg}/>
      <div className="grid grid-cols-1 md:grid-cols-2 border-gray-300 border place-items-start mt-4">
        <div className="w-full">
          <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56607.45606547299!2d76.6206445429597!3d27.532515271615797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39729180ed0390b3%3A0x70b0a4426d24d6d0!2sMIA%20ALWAR%20RAJASTHAN!5e0!3m2!1sen!2sin!4v1693109210232!5m2!1sen!2sin"
            height="450"
            className="border-none w-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className=" m-2 md:m-10 w-9/12 ">
          <div className="Reachus leading-10">
            <p className="font-bold ">Reach Us</p>
            <div className="flex justify-start items-center gap-4">
              <p>
                <MailOutlined className="p-2 rounded-full bg-gray-400 text-white" />
              </p>
              <p>deepakjaindj052@gmail.com</p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <p>
                <PhoneOutlined className="p-2 rounded-full bg-gray-400 text-white" />
              </p>
              <p>8209086250</p>
            </div>
            <div className="flex justify-start items-center gap-4">
              <p>
                <ContactsFilled className="p-2 rounded-full bg-gray-400 text-white" />
              </p>
              <p>F 91,MIA, Rajasthan,301001</p>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-5 gap-8 place-items-center w-full">
            <div className="w-full">
              <p className="text-xs">First Name</p>
              <input
                className="border-b-2 w-full outline-none border-primary text-xs"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <p className="text-xs">Last Name</p>
              <input
                className="border-b-2  w-full  outline-none border-primary text-xs"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <p className="text-xs">Mobile</p>
              <input
                className="border-b-2  w-full outline-none border-primary text-xs"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full">
              <p className="text-xs">Email</p>
              <input
                className="border-b-2  w-full outline-none border-primary text-xs"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="w-full col-span-2">
              <p className="text-xs">Email</p>
              <textarea
                className="border-b-2  w-full outline-none border-primary text-xs"
                placeholder="Enter Your Message"
              />
            </div>
          </div>
          <Button className="w-full mt-4 bg-primary outline-none border-none hover:bg-yellow-400" style={{color:"white"}}>Submit</Button>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contactus;
