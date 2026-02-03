import React from "react";
import { Route, Routes } from "react-router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Courses from "./pages/Courses";
import CoursesDetails from "./pages/CoursesDetails";
import Navbar2 from "./component/Navbar2";
import Kids from "./pages/Kids";
const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product">
          <Route index element={<Product />}></Route>
          <Route path="men" element={<Men />}></Route>
          <Route path="women" element={<Women />}></Route>
          <Route path="kids" element={<Kids />}></Route>
        </Route>
        {/* Nested Routes  Non Professional */}
        {/* <Route path="/product/men" element={<Men />}></Route>
        <Route path="/product/women" element={<Women />}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/courses">
          <Route index element={<Courses />}></Route>
          {/* Type any thing after /courses/???? then open CoursesDetails page */}
          <Route path="/courses/:id" element={<CoursesDetails />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
