import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { useIsAuthenticated } from "react-auth-kit";
import { useSignOut } from "react-auth-kit";
export default function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  const logout = useSignOut();
  let isloggedin = isAuthenticated();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary px-4"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,.08), 0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <div className="container-fluid">
          <div className="navbar-bran d-flex align-items-center">
            <Link to={"/"}>
              <p
                className="fw-bold text-dark fs-3"
                style={{ fontFamily: "'Great Vibes', cursive" }}
              >
                <img
                  className="me"
                  src="../images/shopping-bag.png"
                  alt="logo"
                  style={{ width: "2.5rem", marginTop: "-10px" }}
                ></img>
                <span>KARTIFY</span>
              </p>
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
              {isloggedin ? (
                <>
                  <button
                    className="btn btn-dark px-3 py-2"
                    onClick={() => logout()}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <li className="nav-item nav-lin">
                      <button className="btn btn-dark px-3 py-2">
                        Sign In
                      </button>
                    </li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
