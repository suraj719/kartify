import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import "./product.css";
// import axios from "axios"
export default function Electronics() {
  const [data, setData] = useState([]);
  const [isloading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((json) => {
        return json.json();
      })
      .then((data) => {
        setIsloading(false);
        setData(data);
      });
  }, []);
  return (
    <div>
      {isloading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="d-flex flex-wrap page justify-content-evenly">
            {data.map((pro) => {
              return (
                <Link
                  to={`/products/${pro.id}`}
                  state={{ data: pro }}
                  key={pro.id}
                >
                  <div
                    className="card pro-card mt-5 ms- px-3 pt-2 "
                    style={{ width: "20rem", height: "25rem" }}
                  >
                    <div className="top-d">
                      <span className="top-price">₹{pro.price}</span>
                      <i className="fa-regular fa-heart"></i>
                    </div>
                    <img
                      src={pro.image}
                      className="card-image-top mt-4"
                      alt="product-img"
                      style={{ height: "15rem" }}
                    />
                    <h5 className="card-title text-center mt-2">{pro.title}</h5>
                  </div>
                </Link>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
