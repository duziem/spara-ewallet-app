import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <div className="footer-container-fluid text-center text-md-start mt-5 text-white ">
      <div className=" first-col col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        <img className="" src="/image-logo.svg" alt="" />
        <p>
          5B Water Corporation Road Landmark Towers Victoria Island, Eti-Osa
          101233, Lagos
        </p>
        <p>HotLine: +234 905 501 590</p>
      </div>

      <div>
        <h3>Useful Links</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>

        <ul>
          <li>Services</li>
          <li>Blog</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div>
        <h3>Services</h3>
        <ul>
          <li>Send Money</li>
          <li>Deposte Money</li>
          <li>Bill Payment</li>
          <li>Account Opening</li>
        </ul>
      </div>

      <div>
        <h3>Our Socials</h3>
      </div>

      <div className="copyright text-reset fw-bold">
        Copyright 2022, All Right Reserved
      </div>
    </div>
  );
}

export default Footer