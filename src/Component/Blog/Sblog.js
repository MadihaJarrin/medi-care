import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sblog = (props) => {
  const { title, img, details } = props.data

  return (
    <div>
      <Card className="sb-card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p>{details.slice(0, 50)}.....</p>
          </Card.Text>
          <NavLink id="sp-btn" to="/blog">More details</NavLink>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sblog;