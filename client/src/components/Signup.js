import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [signloading,setsign] = useState(false)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignupHandler = async (e) => {
    e.preventDefault();
    try {
      setsign(true)
      axios.post("http://localhost:5000/api/v1/users/signup", {
        username: username,
        email: email,
        password: password,
      });
      setsign(false)
      navigate("/login")
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div
                className="card"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="../images/acc-img.jpg"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem", height: "100%" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={SignupHandler}>
                        <div className="align-items-center mb-3 pb-1 d-none d-md-flex">
                          <img
                            className="me-2"
                            src="../images/shopping-bag.png"
                            alt="logo"
                            style={{ width: "3rem" }}
                          ></img>
                          <span
                            className="h1 fw-bold mb-0"
                            style={{ fontFamily: "roboto,cursive" }}
                          >
                            KARTIFY
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "0.5px" }}
                        >
                          Sign up for an account
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label className="form-label">Username</label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          <label className="form-label">Email address</label>
                        </div>

                        <div className="form-outline mb-4">
                          <div className="input-group mb-3">
                            <input
                              type={showPassword ? "text" : "password"}
                              className="form-control form-control-lg"
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                            <span
                              className="input-group-text"
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? <i class="fa-solid fa-eye-slash"></i>: <i className="fa-solid fa-eye"></i>}
                              
                            </span>
                          </div>
                          <label className="form-label">Password</label>
                        </div>
                        <div className="pt-1 mb-4">
                        {signloading ? 
                        <>
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                            disabled
                          >
                            Signup
                          </button>
                        </>:<>
                        <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Signup
                          </button>
                        </>}
                        </div>
                        <p
                          className="mb-5 pb-lg-2 d-flex"
                          style={{ color: "#393f81" }}
                        >
                          Already have an account?{" "}
                          <Link to="/login">
                            <span
                              className="text-decoration-underline ms-1"
                              style={{ color: "#393f81" }}
                            >
                              Login
                            </span>
                          </Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
