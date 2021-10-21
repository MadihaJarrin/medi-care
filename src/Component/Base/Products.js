import React, { useEffect, useState } from 'react';
import Counter from '../Counter/Counter';
import Special from '../s.service/Special';
import Specialists from '../SPECIALISTS/Specialists';
import { NavLink } from 'react-router-dom';

import "./products.css"
import Sblog from '../Blog/Sblog';
import Mservice from '../m.service/Mservice';


const Products = () => {

  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    const url = `https://raw.githubusercontent.com/MadihaJarrin/assignment-10-main/main/main`
    fetch(url)
      .then(res => res.json())
      .then(data => setDoctor(data))
  }, [])

  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    const url = `https://raw.githubusercontent.com/MadihaJarrin/ass-10-blog/main/blog`
    fetch(url)
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  const [services, setService] = useState([])
  useEffect(() => {
    const url = `https://raw.githubusercontent.com/MadihaJarrin/ass-10-service/main/service`
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))
  }, [])
  return (
    <div>
      <div>
        <h1>Why Choose Us ?</h1>
        <br />
        <div className="justify-content-center " id="highlight-section">
          <div>
            <a href="ss"><i class="fas fa-ambulance"></i></a>
            <p>24 hour Ambulance Service</p>
          </div>
          <div>
            <a href="ss"><i class="fas fa-hand-holding-medical"></i></a>
            <p>Get Excellent Service</p>
          </div>
          <div>
            <a href="ss"><i class="fas fa-user-md"></i></a>
            <p>Qualified Doctor</p>
          </div>
        </div>
      </div>

      <div className="contain">
        <img className="border border-primary img-fluid" src="http://bestcareerbd.com/themes/medicore/wp-content/uploads/2017/01/page-banner.jpg" alt="Snow" />
        <div className="centered">
          <h1>Do you need our service ??</h1>
          <h5>We are here to give you our best service</h5>
          <div className="justify-content-center d-flex">
            <NavLink type="button" className="btn btn-danger" id="contact-button" to="/contact">Contact us</NavLink>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <h1 className="my-5">Our Popular Services</h1>
      <div id="msr">
        {
          services.map(service => <Mservice
            key={service.id}
            data={service}
          >
          </Mservice>)
        }
      </div>
      <Special></Special>
      <Counter></Counter>
      <h1 className="my-5">Our Specialists</h1>
      <div id="specialists">
        {
          doctors.slice(0, 3).map(doctor => <Specialists
            key={doctor.id}
            doc={doctor}
          >

          </Specialists>)
        }
      </div>
      <br />
      <NavLink id="more-btn" to="/team">More</NavLink>
      <h1 className="mt-5">Health Tips</h1>
      <div id="blog" className="mt-5">
        {
          blogs.slice(0, 2).map(blog => <Sblog
            key={blog.id}
            data={blog}
          >

          </Sblog>)
        }
      </div>
      <br />
      <NavLink id="more-btn" to="/blog">More</NavLink>
    </div>
  );
};

export default Products;