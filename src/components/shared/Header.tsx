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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              obcaecati, fuga amet esse quisquam dicta suscipit quasi officia
              dolorum voluptas. Iste ab beatae quas modi!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              vitae perspiciatis blanditiis perferendis tenetur aut tempora
              eaque, officiis hic nostrum?
            </p>
            <button style={{ border: "1px solid white" }}>See More</button>
          </section>
        </div>

        <div className="video-container">
          <video src="../src/assets/nav_video.mp4" autoPlay loop muted></video>
        </div>
      </header>
    </>
  );
}
