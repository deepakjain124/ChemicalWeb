import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <>
      <Carousel infiniteLoop autoPlay stopOnHover={true} showThumbs={false} showStatus={false} className=" carousel-wrapper">
        <div>
          <img src="https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg" />
        </div>
        <div>
          <img src="https://img.freepik.com/free-photo/beautiful-scenery-phragmites-plants-by-sea-with-swimming-pelican-sunset_181624-37787.jpg" />
        </div>
      </Carousel>
    </>
  );
};

export default Carousal;
