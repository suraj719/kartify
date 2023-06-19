import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   
<div className="footer">

  <div
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
    <div
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#6351ce"}}
             >
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>

      <div className='socials'>
        
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-github"></i>
      </div>
    </div>

      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">KARTIFY</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                />
            <p>
            Welcome to our online store! We offer a wide selection of high-quality products to meet all your needs and provide a seamless shopping experience from the comfort of your own home.
            </p>
          </div>
         

          <div className="col-md-2 products col-lg-2 col-xl-2 mx-auto mb-4">
         
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                />
            <p>
                <Link to='/men'>Men's collections</Link>
            </p>
            <p>
                <Link to='/women'>Women's collections</Link>
            </p>
            <p>
                <Link to='/electronics'>Electronics</Link>
            </p>
            <p>
            <Link to='/jewellery'>Jewellery</Link>
            </p>
          </div>
         

        
          <div className="col-md-3 links col-lg-2 col-xl-2 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Useful links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#!" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-white">Help</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px",backgroundColor: "#7c4dff",height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@kartify.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
         
        </div>
      </div>
    <div
         className="text-center p-3"
         style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
         >
      © 2023 Copyright: KARTIFY
    </div>
    </div>
</div>
  )
}
