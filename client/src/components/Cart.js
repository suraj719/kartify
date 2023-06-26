import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeItem } from "../redux/cartReducer";
import {useIsAuthenticated} from 'react-auth-kit';
import "./home.css";
export default function Cart() {
  const isAuthenticated = useIsAuthenticated()
  let isloggedin = isAuthenticated()
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.products);
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_BACKEND_URL;

  var totalqty = items.reduce((acc, i) => {
    return acc + i.quantity;
  }, 0);
  var totalprice = items.reduce((acc, i) => {
    return acc + i.quantity * i.price;
  }, 0);

  function delitem(itemid) {
    dispatch(removeItem({ id: itemid }));
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((json) => {
        return json.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  const handlecheckout = async () => {
    fetch(`${url}/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify(items),
    })
      .then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
      })
      .then(({ url }) => {
        window.location = url
      })
      .catch(e => {
        console.error(e.error)
      })
  }
  return (
    <div className="">
    {isloggedin ? <>
      {items.length > 0 ? (
        <div className="cart">
          <div className="cart-items ms-5">
            <h3 className="ms-5 mt-3">Shopping Cart</h3>
            <hr className="mx-5" />
            {items.map((it) => {
              return (
                <div key={it.id} id={it.id}>
                  <div className="cart-item mx-5">
                    <div>
                      <img
                        src={it.image}
                        alt="cart-item-img"
                        className="cart-img"
                        style={{ height: "10rem", width: "10rem" }}
                      />
                    </div>
                    <div className="card-body ms-5">
                      <h5 className="card-title fw-semibold">{it.title}</h5>
                      <p>
                        <span className="best-seller fw-semibold text-dark px-2">#1 Best Seller</span> in{" "}
                        {it.category}
                      </p>
                      <div className="d-flex qty">
                        <p className="fw-semibold">Qty: {it.quantity}</p>
                        <span
                          className="ms-3 delitem"
                          onClick={() => delitem(it.id)}
                        >
                          <img
                            src="../images/icon-delete.svg"
                            alt="icon-del"
                            className="mb-1"
                          />{" "}
                          Delete
                        </span>
                      </div>
                      <p className="card-text fw-semibold">price: ₹{it.price}*{it.quantity} = ₹{it.price * it.quantity}</p>
                    </div>
                  </div>
                  <hr className="mx-5" />
                </div>
              );
            })}
          </div>
          <div className="grand mx-5">
            <div className="grand-text ms-2 mb-3 mt-3 me-2">
              <h5 className="grand-price fw-bold">
                Subtotal ({totalqty} items): ₹{totalprice.toFixed(2)}
              </h5>
              <button className="proceed mt-3" onClick={handlecheckout}>Proceed to Buy</button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="no-items ms-5 mt-5 d-flex align-items-center justify-content-center">
            <img
              src="../images/nocart.gif"
              alt="no-items img"
              style={{ height: "20rem" }}
            />
            <div className="mt-3 ms-5">
              <h4 className="mb-">Your kart is empty</h4>
              <Link to="/">
                <button className="proceed">shop more items</button>
              </Link>
            </div>
          </div>
        </div>
      )}
</> :<>
<div>
          <div className="no-items ms-5 mt-5 d-flex align-items-center justify-content-center">
            <img
              src="../images/nocart.gif"
              alt="no-items img"
              style={{ height: "20rem" }}
            />
            <div className="mt-3 ms-5">
              <h4 className="mb-">Please login to your accout to see your cart</h4>
              <Link to="/login">
                <button className="pro btn btn-dark">Login</button>
              </Link>
            </div>
          </div>
        </div>
</>}
      <h4 className="ms-5 mt-5">Recommended based on your shopping trends</h4>
      <div className="d-flex flex-wrap page justify-content-evenly">
        {data.map((pro) => {
          return (
            <Link to={`/products/${pro.id}`} state={{ data: pro }} key={pro.id}>
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
    </div>
  );
}
