import React from 'react';
import { Carousel } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Products from '../Base/Products';
import './caroussel.css'
const Carsouls = () => {
  return (
    <div id='carousel'>
      <Carousel className="m-lg-5 m-sm-2" >
        <Carousel.Item interval={2500} id="main">
          <div className="me-auto " id="base">
            <div className="card mb-3">
              <div className="row g-0" id="base">
                <div className="col-md-4 me-lg-5" id="part2">
                  <img src="https://www.russhhospital.com/images/image-03.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6 " id="part1">
                  <div className="card-body" id="card-text">
                    <h1>Your vision is our PASSION </h1><br />
                    <NavLink className="btns" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="me-auto " id="base">
            <div className="card mb-3">
              <div className="row g-0" id="base">

                <div className="col-md-4 me-lg-5" id="part2">
                  <img src="https://w0.peakpx.com/wallpaper/939/702/HD-wallpaper-doctor-art-draw-girl-health-heart-medicine-people.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6 " id="part1">
                  <div className="card-body" id="card-text">
                    <p>Be Safe</p>
                    <h1>Life is all about your vision</h1>
                    <NavLink className="btns" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="me-auto " id="base">
            <div className="card mb-3">
              <div className="row g-0" id="base">

                <div className="col-md-4 me-lg-5" id="part2">
                  <img src="https://cadencehealthcenter.com/wp-content/uploads/2019/08/image-3.png" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-6 " id="part1">
                  <div className="card-body" id="card-text">
                    <p>Be Healthy</p>
                    <h1>Be Stronger</h1>
                    <NavLink className="btns" to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </Carousel.Item>

      </Carousel>

      <div id="product-data">

        <Products></Products>
      </div>
    </div>
  );
};

export default Carsouls;