import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MemorialCard = ({ memorial }) => {
  return (
    <Card className="mb-4">
      <Card.Body className="d-flex">
        <div className="me-3">
          <Card.Img
            variant="top"
            src={memorial.image}
            alt={memorial.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' }}
          />
        </div>
        <div>
          <Card.Title>{memorial.name}</Card.Title>
          <Card.Text>{memorial.biography}</Card.Text>
          <Link to={`/memorials/${memorial.id}`} className="btn btn-link">View Memorial</Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MemorialCard;
