import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import { addToCart } from "../redux/cartReducer";
import "./product.css";
export default function Propage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = location.state.data;
  let [n, setN] = useState(1);
  function addtocart(id, title, price, category, image, quantity) {
    dispatch(
      addToCart({
        id: id,
        title: title,
        price: price,
        category: category,
        image: image,
        quantity: quantity,
      })
    );
    if (n === 1) {
      swal(`${n} item added to cart`, "Go to cart to checkout", "success");
    } else {
      swal(`${n} items added to cart`, "Go to cart to checkout", "success");
    }
    setN(1);
  }
  function decre() {
    if (n > 1) {
      setN(n - 1);
    }
  }
  function incre() {
    setN(n + 1);
  }

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let date = d.getDate();
  let delday = weekday[d.getDay() - 1];
  let delmonth = month[d.getMonth()];
  return (
    <div className="mt-3">
      <div className="whole">
        <div className="resp d-flex flex-wrap align-items-center">
          <div className="pimg">
            <img src={data.image} className="proimg" alt="img1" />
          </div>
          <div className="details">
            <span
              className="text-decoration-underline fw-bold fs-6"
              style={{ color: "rgb(255, 140, 0)" }}
            >
              {data.category}
            </span>
            <p className="mt-2 fs-2 fw-bold">{data.title}</p>
            <p className="fw-semibold fs-6">{data.description}</p>
            <div className="d-flex mt-1">
              <h2>${data.price}</h2>
              <h4 className="ms-4 priceoff">50%</h4>
            </div>
            <div className="d-flex align-items-center">
              <p className="text-decoration-line-through text-muted">
                ${data.price * 2}
              </p>
              <div
                className="ms-3 d-flex align-items-center gap-1"
                style={{ marginTop: "-15px" }}
              >
                <img src="../images/rating.png" alt="rating" />{" "}
                <span>({Math.ceil(data.price * 5 + 1)} ratings)</span>
              </div>
            </div>
            <div className="d-flex mt- buttons">
              <div className="d-flex val rounded">
                <div className="valminus mt-1" onClick={decre}>
                  <img src="../images/icon-minus.svg" alt="val-minus" />
                </div>
                <div>
                  <h6 className="ms-4 mt-2">{n}</h6>
                </div>
                <div className="ms-4 mt-1 valplus" onClick={incre}>
                  <img src="../images/icon-plus.svg" alt="val-plus" />
                </div>
              </div>
              <div
                className="addtocart ms-5 text-center pt-2 rounded"
                onClick={() =>
                  addtocart(
                    data.id,
                    data.title,
                    data.price,
                    data.category,
                    data.image,
                    n
                  )
                }
              >
                <img src="../images/icon-cart.svg" alt="icon-cart" />
                <span className="ms-2">Add to cart</span>
              </div>
            </div>
            <div className="mt-2 mb-5">
              <span>
                Free delivery, <br /> by {delday}, {date + 6} {delmonth} if
                orders within 8hrs,7mins
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
