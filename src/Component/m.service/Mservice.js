import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Mservice = (props) => {
  const { id, title, img, details } = props.data;
  return (
    <div>
      <Card className="specialists-card shadow-lg p-3 mb-3" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details.slice(0, 70)}
          </Card.Text>
          <Link to={`/details/${id}`}>
            <Button variant="danger">Details</Button>
          </Link>

        </Card.Body>
      </Card>
    </div>
  );
};

export default Mservice;