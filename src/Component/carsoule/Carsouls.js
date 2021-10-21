import React  from 'react';
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
                <div className="col-md-6 " id="part1">
                  <div className="card-body" id="card-text">
                    <p>Stay Home , Stay Safe</p>
                  </div>
                </div>
                <div className="col-md-4 me-lg-5" id="part2">
                  <img src="https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg" className="img-fluid rounded-start" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2500}>
          <div className="me-auto " id="base">
            <div className="card mb-3">
              <div className="row g-0" id="base">
                <div className="col-md-6 " id="part1">
                  <div className="card-body" id="card-text">
                    <p>Be Safe</p>
                    <h1>Be Stronger</h1>
                    <NavLink className="btns" to="/contact">Contact</NavLink>
                  </div>
                </div>
                <div className="col-md-4 me-lg-5" id="part2">
                  <img src="https://embed.widencdn.net/img/veritas/4qdmeht1ts/1200x675px/doctor-specialists.jpg" className="img-fluid rounded-start" alt="..." />
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