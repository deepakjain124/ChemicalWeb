import React, { useState } from "react";
import {
  CloseCircleFilled,
  MenuFoldOutlined,
  CaretDownFilled,
} from "@ant-design/icons";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { Dropdown } from "antd";
import { useNavigate } from "react-router-dom";
import { ProductList } from "./ProductList";
const NavbarItem = (props) => {
  const [showProduct, setShowProduct] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="cursor-pointer w-full   capitalize text-sm gap-2 border-b border-b-gray-400 mb-2 p-3">
        <p onClick={() => setShowProduct(!showProduct)}>
          Our Product <CaretDownFilled />
        </p>
        {showProduct && (
          <>
            <div className="bg-white animate-bounce text-orange-700 p-4 leading-8 mt-2 rounded-md">
              {ProductList.map((i) => {
                return (
                  <p
                    key={i.key}
                    onClick={() => {
                      props.setTpggleMenu(false);
                      navigate("/productDesc", { state: { name: i.label } });
                    }}
                  >
                    {i.label}
                  </p>
                );
              })}
            </div>
          </>
        )}
      </div>
      <div
        onClick={() => {
          props.setTpggleMenu(false);
          navigate("/aboutus");
        }}
        className="flex cursor-pointer w-full justify-start  capitalize text-sm gap-2 border-b border-b-gray-400 mb-2 p-3 items-center"
      >
        <p>About US</p>
      </div>{" "}
      <div
        onClick={() => {
          props.setTpggleMenu(false);
          navigate("/blogs");
        }}
        className="flex cursor-pointer w-full justify-start  capitalize text-sm gap-2 border-b border-b-gray-400 mb-2 p-3 items-center"
      >
        <p>Blogs</p>
      </div>{" "}
      <div
        onClick={() => {
          props.setTpggleMenu(false);
          navigate("/contactus");
        }}
        className="flex cursor-pointer w-full justify-start  capitalize text-sm gap-2 border-b border-b-gray-400 mb-2 p-3 items-center"
      >
        <p>Contact US</p>
      </div>
    </>
  );
};
const Header = () => {
  const navigate = useNavigate();
  const [toggleMenu, setTpggleMenu] = useState(false);

  const items = ProductList.map((i, index) => {
    return {
      key: index,
      label: (
        <p
          onClick={() => navigate("/productDesc", { state: { name: i.label } })}
        >
          {i.label}
        </p>
      ),
    };
  });
  const phoneNumber = "+91 92143 48850"; // Replace with the actual phone number
  const message = "Hello, I'm reaching out from your website!"; // Replace with your message

  const handleWhatsAppClick = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="header p-3 fixed w-full z-10 cursor-pointer  h-16 flex justify-around text-white items-center bg-primary">
        <div>
          {toggleMenu ? (
            <MenuFoldOutlined
              className="text-white lg:hidden cursor-pointer"
              onClick={() => setTpggleMenu(true)}
            />
          ) : (
            <MenuFoldOutlined
              className="text-white lg:hidden cursor-pointer"
              onClick={() => setTpggleMenu(true)}
            />
          )}
        </div>
        {toggleMenu && (
          <ul
            className="z-10 menubar overflow-x-hidden overflow-scroll h-full fixed -top-0 -left-2 p-7 w-[70vw] shadow-2xl lg:hidden list-none
         flex flex-col justify-start items-start rounded-md bg-primary  text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <CloseCircleFilled onClick={() => setTpggleMenu(false)} />
            </li>
            <NavbarItem setTpggleMenu={setTpggleMenu} />
          </ul>
        )}
        <div
          onClick={() => navigate("/")}
          className="logoImage flex justify-start gap-4 items-center "
        >
          <p>2Microns</p>{" "}
          <IoLogoWhatsapp
            onClick={handleWhatsAppClick}
            className="text-green-500 animate-pulse cursor-pointer text-xl"
          />
          <p>Call Now</p>
          <a href={`tel:${phoneNumber}`}>
            <FiPhoneCall className="text-green-500 animate-pulse cursor-pointer text-xl" />
          </a>
        </div>
        <div className=" text-[12px] hover:text-yellow-300 font-semibold cursor-pointer md:inline hidden  items-center gap-2">
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottom"
            arrow={{
              pointAtCenter: true,
            }}
          >
            <p>
              Our Products
              <span>
                {" "}
                <CaretDownFilled />
              </span>
            </p>
          </Dropdown>
        </div>
        <div className="Dateandtime hover:text-yellow-300 text-[12px] font-semibold lg:inline hidden">
          <p onClick={() => navigate("/aboutus")}>About US</p>
        </div>{" "}
        <div className="Dateandtime hover:text-yellow-300 text-[12px] font-semibold lg:inline hidden">
          <p onClick={() => navigate("/blogs")}>Blogs</p>
        </div>{" "}
        <div className="Dateandtime hover:text-yellow-300 text-[12px] font-semibold lg:inline hidden">
          <p onClick={() => navigate("/contactus")}>Contact US</p>
        </div>
      </div>
      <div className="xl:inline hidden">{/* <HeaderBottom /> */}</div>
    </>
  );
};

export default Header;
