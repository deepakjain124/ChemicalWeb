import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "./View/Header";
import Home from "./View/Home";
import Footer from "./View/Footer/Footer";
import { MessageOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import Contactus from "./View/ContactUS/Contactus";
import ProductDesc from "./View/ProductOverView/ProductDesc";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AboutUS from "./View/AboutUS";
import Blogs from "./View/Blogs/Blogs";
import Login from "./View/Admin/Login/Login";
import Dashboard from "./View/Admin/Dashboard/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink to="/contactus">
          {(!window.location.pathname.includes("/admin") &&
            !window.location.pathname.includes("/dashboard")) && (
            <FloatButton
              icon={<MessageOutlined />}
              tooltip="Contact Us"
              shape="circle"
              className="bg-primary flex justify-center items-center text-white shadow-2xl shadow-black"
              onClick={() => console.log("click")}
            />
          )}
        </NavLink>
        {(!window.location.pathname.includes("/admin") &&
          !window.location.pathname.includes("/dashboard")) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aboutus" element={<AboutUS />} />
          <Route path="/productDesc" element={<ProductDesc />} />
        </Routes>
      </BrowserRouter>
      {(!window.location.pathname.includes("/admin") &&
        !window.location.pathname.includes("/dashboard")) && <Footer />}
    </>
  );
}

export default App;
