import React from 'react';
import { Button } from 'react-bootstrap';
import "./contact.css"
const Contact = () => {
  return (
    <div className="container div">
      <div>
        <h2>Our Location</h2>
        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58403.658902489224!2d90.32726123372136!3d23.81046589720496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1c61277db%3A0xc7d18838730e2e59!2z4Kau4Ka_4Kaw4Kaq4KeB4KawLCDgpqLgpr7gppXgpr4!5e0!3m2!1sbn!2sbd!4v1634704620824!5m2!1sbn!2sbd" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
      </div>
      <br />
      <div class=" mb-3">
        <h3>For Emergency Ambulance Service</h3>
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div class=" mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
      </div>
      <div class="mb-3">
        <h4>Address</h4>
        <label for="exampleFormControlTextarea1" class="form-label"></label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <br />
        <Button variant="primary">Submit</Button>
      </div>
    </div>
  );
};

export default Contact;