import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import MemorialCard from './MemorialCard';
import ProfilePicture from '../assets/ProfilePicture.png'; // Import the image

const Memorials = () => {
  const [search, setSearch] = useState('');
  const [memorials, setMemorials] = useState([]);
  const [filteredMemorials, setFilteredMemorials] = useState([]);

  useEffect(() => {
    // Fetch all memorials (this could be from an API)
    const fetchedMemorials = [
      { id: 1, name: 'John Doe', biography: 'A beloved family man.', image: ProfilePicture },
      { id: 2, name: 'Jane Smith', biography: 'A kind and gentle soul.', image: ProfilePicture },
      // Add more memorials...
    ];

    setMemorials(fetchedMemorials);
    setFilteredMemorials(fetchedMemorials); // Show all initially

    // You can implement a random display of memorials if no search is active
    if (!search) {
      const randomMemorials = fetchedMemorials.sort(() => 0.5 - Math.random()).slice(0, 5); // Show 5 random memorials
      setFilteredMemorials(randomMemorials);
    }
  }, [search]);

  useEffect(() => {
    // Filter memorials based on the search field
    if (search) {
      const filtered = memorials.filter(memorial =>
        memorial.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredMemorials(filtered);
    } else {
      // Show random memorials if no search is entered
      const randomMemorials = memorials.sort(() => 0.5 - Math.random()).slice(0, 5);
      setFilteredMemorials(randomMemorials);
    }
  }, [search, memorials]);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        {filteredMemorials.map((memorial) => (
          <Col sm={12} md={6} lg={4} key={memorial.id}>
            <MemorialCard memorial={memorial} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Memorials;
