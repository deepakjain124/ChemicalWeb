import React from 'react'
import { images } from '../Assets'

const Banner = ({name="",image=images.dolomite}) => {
  return (
    <div className="contact-us-header bg-cover bg-no-repeat max-w-full h-[calc(100vh-500px)] md:h-[calc(100vh-200px)]  flex justify-center  items-center  " style={{backgroundImage:`url(${image})`}}>
    <p className="text-primary text-xl md:text-5xl m-4  border-b-2 border-primary bg-transparent p-10 shadow-lg shadow-gray-400">
      {name}
    </p>
  </div>
  )
}

export default Banner
// .contact-us-header {
//   background-image: url("./Assets//contact.jpg");
//   background-size: cover;
//   background-repeat: no-repeat;
//   max-width: 100%;
//   height: calc(100vh - 200px);
//   max-height: calc(100vh - 200px); /* Adjust the maximum image height */
//   margin: 0 auto; /* Center the images horizontally */
// }