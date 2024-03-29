import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Gallery from "./pages/Gallery";
// import Login from "./pages/Login";
import Register from "./pages/Register";
import BookApp from "./pages/BookApp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServiceDetails";
import Verify from "./pages/Verify";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import Blog from "./pages/Blog";

import RedirectToHome from "./Components/redirectToHome";

function App() {
    const token = null; //localStorage.getItem("token");

    useEffect(() => {
        const nav = document.querySelector("nav");
        function addLifetoNavbar() {
            if (window.scrollY > 15) {
                nav.setAttribute(
                    "style",
                    "backdrop-filter: blur(30px); box-shadow: 0px 0px 50px -25px black"
                );
            } else {
                nav.setAttribute(
                    "style",
                    "backdrop-filter: blur(30px); box-shadow: none"
                );
            }
        }

        window.addEventListener("scroll", addLifetoNavbar);
    }, []);

    return (
        <>
            <Header />
            <Routes>
                <Route path="*" element={<RedirectToHome />} />
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/service/:id" element={<ServiceDetails />} />
                <Route path="/gallery" element={<Gallery />} />
                {/* <Route
                    path="/bookapp"
                    element={!token ? <Login /> : <BookApp />}
                /> */}
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                {/* <Route path="/blog" element={<Blog />} /> */}
                {/* <Route path="/login" element={!token ? <Login /> : <Home />} /> */}
                <Route path="/register" element={<Register />} />
                <Route path="/verify-email" element={<Verify />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
