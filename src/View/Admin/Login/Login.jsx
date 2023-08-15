import { Button } from "antd";
import React, { useState } from "react";

const Login = () => {
  const [fields, setFields] = useState({
    name: "",
    password: "",
  });
  const [btnLoading, setBtnLoading] = useState(false);
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFields({ ...fields, [name]: value });
  };
  const handleLogin = () => {};
  return (
    <>
      <div className="flex justify-center text-xs items-center h-screen">
        <div className="login w-full m-2 md:w-1/4 p-4 bg-primary">
          <div className=" text-center text-white">
            <p>2MICRONS</p>
            <p className="text-xl">Login</p>
          </div>
          <div className="fields text-white w-full flex flex-col justify-start items-start leading-8">
            <p>Username</p>
            <input
              value={fields.name}
              onChange={handleChange}
              name="name"
              placeholder="Enter Username"
              className="border w-full border-gray-400 text-black px-2 rounded-sm outline-none"
            />
            <p>Password</p>
            <input
              value={fields.password}
              onChange={handleChange}
              name="password"
              placeholder="Enter Password"
              className="border w-full border-gray-400 text-black px-2 rounded-sm outline-none"
            />
            <Button
              onClick={handleLogin}
              loading={btnLoading}
              className="w-full mt-4 rounded-none bg-black border-none text-white"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
