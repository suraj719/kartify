import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./product.css";
export default function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((json) => {
        return json.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap page justify-content-evenly">
        {data.map((pro) => {
          return (
            <Link to={`/products/${pro.id}`} state={{ data: pro }}>
              <div
                className="card pro-card mt-5 ms- px-3 pt-2 "
                style={{ width: "20rem", height: "25rem" }}
                key={pro.id}
              >
                <div className="top-d">
                  <span className="top-price">${pro.price}</span>

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
    </div>
  );
}
