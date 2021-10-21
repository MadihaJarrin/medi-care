import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import "./Specialists.css"
const Specialists = (props) => {
    const {name ,  specialty , degree ,img} = props.doc ;
    return (
        <div >
           <Card className="specialists-card shadow-lg p-3 mb-3">
  <Card.Img id="card-img" variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
    <p className="fw-bolder">Degree: {degree.slice(0,30)}</p>
    <p>Specialty:- {specialty}</p>
    </Card.Text>
     <NavLink id="sp-btn" to="/team">Details</NavLink>
  </Card.Body>
</Card>

        </div>
    );
};

export default Specialists;
