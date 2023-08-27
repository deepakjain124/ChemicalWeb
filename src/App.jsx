import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Header from "./View/Header";
import Home from "./View/Home";
import { FloatButton } from "antd";
import Contactus from "./View/ContactUS/Contactus";
import ProductDesc from "./View/ProductOverView/ProductDesc";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AboutUS from "./View/AboutUS";
import Blogs from "./View/Blogs/Blogs";
import Login from "./View/Admin/Login/Login";
import Dashboard from "./View/Admin/Dashboard/Dashboard";
import { FiPhoneCall } from "react-icons/fi";
import Error from "./View/Error";

function App() {
  const phoneNumber = "+91 92143 48850"; // Replace with the actual phone number
  return (
    <>
      <Router>
        <a href={`tel:${phoneNumber}`}>
          {(!window.location.pathname.includes("/admin") &&
            !window.location.pathname.includes("/dashboard")) && (
            <FloatButton
              icon={<FiPhoneCall />}
              tooltip="Call"
              shape="circle"
              className="bg-primary flex justify-center items-center text-white shadow-2xl shadow-black"
            />
          )}
        </a>
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
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
