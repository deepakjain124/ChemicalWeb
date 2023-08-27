import React from 'react'
import Carousal from './Carousal'
import OurProduct from './OurProduct'
import Footer from '../Footer/Footer'

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
   <Footer/>
   </>
  )
}

export default Home