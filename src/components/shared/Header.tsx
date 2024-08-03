import { useState } from "react";
import "../../assets/css/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar">
            <Link to="/" className="logo ">
              <img
                width={80}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScVxLZr89XeZTUoE7oBFTV_1gROV9bugBdmQ&s"
                alt=""
              />
            </Link>
            <ul className={`nav-links ${open ? "active" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <button>
                  <Link to="/dashboard">Dashboard</Link>
                </button>
              </li>
            </ul>
            <i
              className="fas fa-bars fa-2x active"
              id="burger"
              onClick={() => setOpen(!open)}
            >
              mobile
            </i>
          </nav>
          <section className="showcase">
            <h1>Curvy Road in Snow Covered Forest</h1>
            <p>
              At Campers' Haven, we believe that every outdoor adventure should be unforgettable. That's why we offer a wide range of high-quality camping gear and equipment to help you explore the great outdoors with ease and confidence.
            </p>
            <p>
              Whether you're a seasoned backpacker or a weekend camper, we have everything you need to make your trip a success.
            </p>
            <a href="#products"> <button style={{ border: "1px solid white" }}>See More</button></a>
          </section>
        </div>

        <div className="video-container">
          <video src="https://videos.pexels.com/video-files/5416827/5416827-hd_1920_1080_30fps.mp4" autoPlay loop muted></video>
        </div>
      </header>
    </>
  );
}
