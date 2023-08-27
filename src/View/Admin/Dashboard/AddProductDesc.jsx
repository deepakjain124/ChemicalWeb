import { UploadOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Upload } from "antd";
import React, { useState } from "react";
import { MdCancel } from "react-icons/md";

const AddProductDesc = ({ isOpen, setIsOpen }) => {
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  const [chemicalProp, setChemicalProp] = useState([]);
  const [physicalProp, setPhysicalProp] = useState([]);
  const [image, setImage] = useState([]);
  const handleAddChemical = () => {
    setChemicalProp([
      ...chemicalProp,
      {
        type: "",
        content: "",
      },
    ]);
  };
  const handleRemoveChemical = (index) => {
    let data = [...chemicalProp];
    data.splice(index, 1);
    setChemicalProp(data);
  };
  const handleAddPhysical = () => {
    setPhysicalProp([
      ...chemicalProp,
      {
        type: "",
        content: "",
      },
    ]);
  };
  const handleRemovePhysical = (index) => {
    let data = [...chemicalProp];
    data.splice(index, 1);
    setPhysicalProp(data);
  };
  const handleCustomReq = ({ file, fileName }) => {
    const reader=new FileReader()
    reader.onload=async()=>{
    }
    const files=URL.createObjectURL(file)
    const data={...file}
    data.name=file.name
    data.thumbUrl=files
    setImage(data)
  };
  return (
    <>
      <Modal
        footer={null}
        title="Add Product"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="min-h-[30px] max-h-[300px] overflow-y-scroll p-3">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Chemical Props</p>
            <p
              onClick={handleAddChemical}
              className="bg-primary cursor-pointer px-3 py-1 text-white rounded-md"
            >
              Add
            </p>
          </div>
          {chemicalProp.length !== 0 && (
            <div className="min-h-0 max-h-64 mt-4 p-3 overflow-y-scroll border-dashed border-primary border-2">
              {chemicalProp.map((i, index) => (
                <div
                  key={index}
                  className="mt-4 gap-6 text-black flex justify-around items-center"
                >
                  <Input
                    value={i.type}
                    name="type"
                    placeholder="Enter Chemical Name"
                  />
                  <Input
                    value={i.content}
                    name="content"
                    placeholder="Enter Chemical Content"
                  />
                  <p
                    className="cursor-pointer"
                    onClick={() => handleRemoveChemical(index)}
                  >
                    <MdCancel />
                  </p>
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between mt-2 items-center">
            <p className="font-semibold">Physical Props</p>
            <p
              onClick={handleAddPhysical}
              className="bg-primary cursor-pointer px-3 py-1 text-white rounded-md"
            >
              Add
            </p>
          </div>
          {physicalProp.length !== 0 && (
            <div className="min-h-0 max-h-64 mt-4 p-3 overflow-y-scroll border-dashed border-primary border-2">
              {physicalProp.map((i, index) => (
                <div
                  key={index}
                  className="mt-4 gap-6 text-black flex justify-around items-center"
                >
                  <Input
                    value={i.type}
                    name="type"
                    placeholder="Enter Chemical Name"
                  />
                  <Input
                    value={i.content}
                    name="content"
                    placeholder="Enter Chemical Content"
                  />
                  <p
                    className="cursor-pointer"
                    onClick={() => handleRemovePhysical(index)}
                  >
                    <MdCancel />
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4">
            <p className="font-semibold">Upload Product Image</p>
            <Upload
              customRequest={handleCustomReq}
              listType="picture"
              fileList={[image]}
              maxCount={1}
            >
              <Button
                className="bg-primary border-none mt-2"
                style={{ color: "white" }}
                icon={<UploadOutlined />}
              >
                Upload (Max: 1)
              </Button>
            </Upload>
          </div>
          {/* <Input />

          <Input />

          <Input />

          <Input /> */}
        </div>
        <div className="flex justify-end mt-4 items-center gap-4">
          <Button className="bg-primary outline-none border-none text-white">
            Cancel
          </Button>
          <Button
            htmlType="submit"
            className="bg-primary outline-none border-none text-white"
          >
            Add
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default AddProductDesc;
