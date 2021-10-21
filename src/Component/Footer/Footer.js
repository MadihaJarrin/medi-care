import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"

const Footer = () => {
  return (
    <div className="mt-5">
      <footer>
        <div className="main-content">
          <div className="left box">
            <h2>About Medi-care</h2>
            <div className="content">
              <p>Medi-Care Hospital is a tertiary care hospital and the leading contributor of private healthcare services in Bangladesh. This has been achieved only through consistent commitment to improve the lives of people through utmost service excellence since its inception on 16th December, 2006. Medi-Care Hospital is one of the ventures of Square Group which is the top business group of the country. <NavLink to="/about">More</NavLink> </p>
              <div className="social">
                <a href="https://facebook.com"><span className="fab fa-facebook-f"></span></a>
                <a href="ss"><span className="fab fa-twitter"></span></a>
                <a href="https://instagram.com"><span className="fab fa-instagram"></span></a>
                <a href="https://youtube.com"><span className="fab fa-youtube"></span></a>
              </div>
            </div>
          </div>

          <div className="center box">
            <h2>Address</h2>
            <div className="content">
              <div className="place">
                <span className="fas fa-map-marker-alt"></span>
                <span className="text">Mirpur 12 , Dhaka</span>
              </div>
              <div className="phone">
                <span className="fas fa-phone-alt"></span>
                <span className="text">008-01875669144</span>
              </div>
              <div className="email">
                <span className="fas fa-envelope"></span>
                <span className="text">madihajarrin@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="right box">
            <h2>Contact us</h2>
            <div className="content">
              <form action="#">
                <div className="email">
                  <div className="text">Email *</div>
                  <input type="email" required />
                </div>
                <div className="msg">
                  <div className="text">Message *</div>
                  <textarea rows="2" cols="25" required></textarea>
                </div>
                <div className="btn">
                  <button type="submit">Send</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="far fa-copyright"></span><span> 2021 All rights reserved.</span>
          </center>
        </div>
      </footer>
    </div>
  );
};

export default Footer;