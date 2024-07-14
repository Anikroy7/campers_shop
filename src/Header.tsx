import { useState } from "react";


export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#" className="logo">
            Logo
          </a>
          <ul className={`nav-links ${open ? "active" : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <button>Sign In</button>
            <button>Sign Up</button>
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
            vitae perspiciatis blanditiis perferendis tenetur aut tempora eaque,
            officiis hic nostrum?
          </p>
          <button style={{ border: "1px solid white" }}>See More</button>
        </section>
      </div>

      <div className="video-container">
        <video src="../src/assets/nav_video.mp4" autoPlay loop muted></video>
      </div>
    </header>
  );
}
