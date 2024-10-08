import React from "react";
import Banner from "../Banner";
import { images } from "../../Assets";
import Footer from "../Footer/Footer";

const Blogs = () => {
  return (
   <>
    <div className="p-5 ">
      <Banner name="Blogs" image={images.blogs} />
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        <div class="py-4">
          <div class="shadow-lg group container  rounded-md bg-white  max-w-[17rem] md:max-w-sm flex justify-center items-center  mx-auto content-div">
            <div>
              <div class="w-full image-cover rounded-t-md">
                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                  <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
                    {" "}
                    12
                  </span>
                  <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                    April
                  </span>
                </div>
              </div>
              <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                <span class="block text-lg text-gray-800 font-bold tracking-wide">
                  Dolomite Powder
                </span>
                <span class="block text-gray-600 text-sm">
                  Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
                  Donec bibendum faucibus purus eget cursus. Proin enim ante,
                  scelerisque vel sem sit amet, ultrices mollis risus. Praesent
                  justo felis, ullamcorper a cursus sed, condimentum at dui.
                </span>
              </div>
            </div>
            <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
              <span class="text-xl font-bold text-white tracking-wider leading-relaxed font-sans">
                Read More About It
              </span>
              <div class="pt-8 text-center">
                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-4">
          <div class="shadow-lg group container  rounded-md bg-white  max-w-[17rem] md:max-w-sm flex justify-center items-center  mx-auto content-div">
            <div>
              <div class="w-full image-cover rounded-t-md">
                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                  <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
                    {" "}
                    12
                  </span>
                  <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                    April
                  </span>
                </div>
              </div>
              <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                <span class="block text-lg text-gray-800 font-bold tracking-wide">
                  Dolomite Powder
                </span>
                <span class="block text-gray-600 text-sm">
                  Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
                  Donec bibendum faucibus purus eget cursus. Proin enim ante,
                  scelerisque vel sem sit amet, ultrices mollis risus. Praesent
                  justo felis, ullamcorper a cursus sed, condimentum at dui.
                </span>
              </div>
            </div>
            <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
              <span class="text-xl font-bold text-white tracking-wider leading-relaxed font-sans">
                Read More About It
              </span>
              <div class="pt-8 text-center">
                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div> <div class="py-4">
          <div class="shadow-lg group container  rounded-md bg-white  max-w-[17rem] md:max-w-sm flex justify-center items-center  mx-auto content-div">
            <div>
              <div class="w-full image-cover rounded-t-md">
                <div class="p-2 m-4 w-16 h-16 text-center bg-gray-700 rounded-full text-white float-right fd-cl group-hover:opacity-25">
                  <span class="text-base tracking-wide  font-bold border-b border-white font-sans">
                    {" "}
                    12
                  </span>
                  <span class="text-xs tracking-wide font-bold uppercase block font-sans">
                    April
                  </span>
                </div>
              </div>
              <div class="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-25">
                <span class="block text-lg text-gray-800 font-bold tracking-wide">
                  Dolomite Powder
                </span>
                <span class="block text-gray-600 text-sm">
                  Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula.
                  Donec bibendum faucibus purus eget cursus. Proin enim ante,
                  scelerisque vel sem sit amet, ultrices mollis risus. Praesent
                  justo felis, ullamcorper a cursus sed, condimentum at dui.
                </span>
              </div>
            </div>
            <div class="absolute opacity-0 fd-sh group-hover:opacity-100">
              <span class="text-xl font-bold text-white tracking-wider leading-relaxed font-sans">
                Read More About It
              </span>
              <div class="pt-8 text-center">
                <button class="text-center rounded-lg p-4 bg-white  text-gray-700 font-bold text-lg">
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
   </>
  );
};

export default Blogs;
