import React from "react";
import { Carousel } from "react-responsive-carousel";

const Carousal = () => {
  return (
    <>
      <Carousel infiniteLoop autoPlay stopOnHover={true} showThumbs={false} showStatus={false} className="mt-20 carousel-wrapper">
        <div>
          <img alt="carousal" src="https://cdn.corporatefinanceinstitute.com/assets/mining-industry.jpeg" />
        </div>
        <div>
          <img alt="carousal" src="https://www.here.com/sites/g/files/odxslz256/files/2022-06/mining-truck-mine-blog.jpg" />
        </div>
        <div>
          <img alt="carousal" src="https://www.mining.com/wp-content/uploads/2016/03/dredge-pit-open-truck-machinery-equipment-loader-coal-admin-900.jpg" />
        </div>
      </Carousel>
    </>
  );
};

export default Carousal;
