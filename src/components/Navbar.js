import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
export default function Navbar() {
    let items = JSON.parse(localStorage.getItem("items"))
    var totalqty = items.reduce((acc,i) => {
        return acc+i.quantity
    },0)
  return (
    <div>
    <nav className='navbar navbar-expand-md'>
        <div className='container-fluid'>
            <div className='navbar-brand ms-5'>
                <Link to='/'>
                    <img src="../images/logo-full.png" alt="brand logo" className="mt-3" style={{width:"8rem"}}/>
                </Link>
            </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse text-center' id="navbarSupportedContent">
            <ul className='navbar-nav ms-5'>
                <li className='nav-item nav-link'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/men'>Men</Link>
                </li>
                <li className='nav-item nav-link'>
                    <Link to='/women'>Women</Link>
                </li>
                <li className="nav-item nav-link">
                    <Link to='/electronics'>Electronics</Link>
                </li>
                <li className="nav-item nav-link">
                    <Link to='/jewellery'>Jewellery</Link>
                </li>
            </ul>
          </div>
          
      </div>
      
        <div className='rytitems d-flex'>
            <div className='me-4 mt-'>
                <Link to='/cart'>
                    <div className="cntitems"><span>{totalqty}</span></div>
                    <img src="../images/cart.png" alt="cart-img" style={{height:"50px"}}/>
                </Link>
                
            </div> 
            <div className="me-5">
                <img src="../images/avatar.png" alt="userimg" style={{height:"50px"}}/>
            </div>   
        </div>
    </nav>
</div>
  );
}

