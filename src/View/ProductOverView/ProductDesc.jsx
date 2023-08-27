import React, { useEffect, useState } from "react";
import Banner from "../Banner";
import { images } from "../../Assets";
import { useLocation } from "react-router-dom";
import { productDetail } from "../../ProductDetails";
import Footer from "../Footer/Footer";

const ProductDesc = () => {
  const location = useLocation();
  const { name } = location.state;
  const [productdata, setprductdata] = useState([]);
  const[chemicalprop,setchemicalprop]=useState([])
  useEffect(() => {
    const filterdata = productDetail.filter((i) =>
      i.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );
setchemicalprop(filterdata[0].chemicalComposition.length!==0&&Object.entries(filterdata[0].chemicalComposition[0]).flat())
    setprductdata(filterdata);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [name]);
  return (
    <>
      <div className="p-5 ">
        <Banner name={name} />
        <div className="grid mt-14 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 place-items-start">
          <div className="w-full h-full">
            <img
              className="h-72 md:h-96 w-full "
              src={productdata[0]?.image ?? images.dolomite}
              alt="benefit"
            />
          </div>
          <div className="m-6 md:mr-8">
            <p className="font-bold text-3xl md:text-xl">Benefits</p>
            <p className="leading-6 text-[15px] text-justify md:leading-8">
              {productdata[0]?.about ?? ""}
            </p>
          </div>
        </div>
        {/* <div className="border border-gray-300 shadow-lg shadow-gray-400 mt-4 p-6">
        <p className="text-xl font-bold">Physical Properties:</p>
        <div className="border-t-2 w-44  border-primary"></div>
            
      </div> */}
        <div className="border border-gray-300 shadow-lg shadow-gray-400 mt-4 p-6">
          <p className="text-xl font-bold">Chemical Properties:</p>
          <div className="border-t-2 w-44  border-yellow-300"></div>
          <div className="grid border h-96 overflow-y-scroll border-primary rounded-sm p-3 grid-cols-2 place-items-center mt-5 w-full md:w-1/2">
            {chemicalprop && chemicalprop.map((i,index)=>{
              return (
                <div key={index}  className={`border h-20 overflow-y-scroll ${index%2===0?"font-semibold":""} hover:text-white transition-all hover:bg-primary border-primary p-4 w-full`}>
              <p>{i}</p>
            </div>
           
              )
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ProductDesc;
