import React from 'react'
import { images } from '../Assets'

const Banner = ({name="",image=images.bannerbg}) => {
  return (
    <div className="contact-us-header mt-20 bg-cover bg-no-repeat max-w-full h-[calc(100vh-390px)] md:h-[calc(100vh-200px)]  flex justify-center  items-center  " style={{backgroundImage:`url(${image})`,backgroundSize:"cover"}}>
    <p className="text-yellow-500 text-xl md:text-5xl m-4  border-b-4 rounded-md border-yellow-300 bg-transparent p-10 shadow-lg shadow-gray-400">
      {name}
    </p>
  </div>
  )
}

export default Banner
