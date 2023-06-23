import React from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";
export default function Navbar() {
  // const items = useSelector((state) => state.cart.products);
  // const totalqty = items.length;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary px-4">
        <div className="container-fluid">
          <div className="navbar-brand">
            <Link to={"/"}>
              <img
                src="../images/logo-full.png"
                alt="brand-logo"
                style={{ width: "8rem" }}
              />
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
                {/* <div className="cntitems">{totalqty}</div> */}
                <i
                  class="fa-solid fa-cart-shopping fa-xl"
                  style={{ color: "black" }}
                ></i>
              </li>
              <li className="nav-item nav-lin">
                <button className="btn btn-dark px-3 py-2">Sign In</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
