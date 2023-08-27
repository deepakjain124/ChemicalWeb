import { Button, Modal } from 'antd'
import React from 'react'

const AddProductModal = ({isOpen,setIsOpen}) => {
    const handleOk = () => {
        setIsOpen(false);
      };
      const handleCancel = () => {
        setIsOpen(false);
      };
  return (
    <>
     <Modal footer={null} title="Add Product" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='font-semibold'>Product</p>
       <input className='border outline-none mt-2 px-4 border-primary h-9' placeholder='Enter Product Name '/>
       <div className='flex justify-end items-center'>
       <Button className='bg-primary text-white border-none outline-none'>Add</Button>
       </div>
      </Modal>
    </>
  )
}

export default AddProductModal