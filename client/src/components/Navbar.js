import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to={"/"}>
              {/* <img
                src="../images/logoj.png"
                alt="brand-logo"
                style={{ width: "11rem" , height:"3rem"}}
              /> */}
              <p className="fw-bold text-dark fs-3" style={{fontFamily:"'Great Vibes', cursive"}}>KARTIFY</p>
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-4 ms-auto mb-lg-0">
              <li className="nav-item nav-link">
                <Link to="/men">Men</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/women">Women</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/electronics">Electronics</Link>
              </li>
              <li className="nav-item nav-link">
                <Link to="/jewellery">Jewellery</Link>
              </li>
              <li className="nav-item nav-link">
              <Link to="/cart">
                <i
                  className="fa-solid fa-cart-shopping fa-lg"
                  style={{ color: "black" }}
                ></i>
              </Link>
              </li>
            <Link to="/signup">
              <li className="nav-item nav-lin">
                <button className="btn btn-dark px-3 py-2">Sign In</button>
              </li>
            </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
