import React from 'react'
import Carousal from './Carousal'
import OurProduct from './OurProduct'

const Home = () => {
  return (
   <>
   <div
        className="p-5 "
        style={{ fontFamily: "Noto Serif Vithkuqi, serif" }}
      >
   <Carousal/>
   <OurProduct/>
   </div>
   </>
  )
}

export default Home