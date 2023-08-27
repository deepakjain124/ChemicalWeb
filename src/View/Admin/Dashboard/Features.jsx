import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import TableData from './Table'
import AddProductModal from './AddProductModal'
import AddProductDesc from './AddProductDesc'

const Features = () => {
    const[isOpen,setIsOpen]=useState(false)
    const[isDescOpen,setIsDescOpen]=useState(false)
  return (
    <>
    <Carousel infiniteLoop autoPlay stopOnHover={true} showThumbs={false} showStatus={false} className="mt-4 carousel-wrapper">
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
      <div className='flex gap-4 justify-end text-xs items-center'>
        <p onClick={()=>setIsOpen(true)} className='bg-primary p-4 text-white rounded-md mt-4 cursor-pointer hover:bg-yellow-500'>Add Product</p>
        <p onClick={()=>setIsDescOpen(true)} className='bg-primary p-4 text-white rounded-md mt-4 cursor-pointer hover:bg-yellow-500'>Add Product Desc</p>
      
      </div>
      <TableData/>
      {isOpen && <AddProductModal isOpen={isOpen} setIsOpen={setIsOpen}/>}
      {isDescOpen && <AddProductDesc isOpen={isDescOpen} setIsOpen={setIsDescOpen}/>}

    </>
  )
}

export default Features