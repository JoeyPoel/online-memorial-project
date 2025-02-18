import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfilePicture from '../assets/ProfilePicture.png'; // Import the default image

const MemorialPage = () => {
  const { id } = useParams(); // Get the id from the URL
  const [memorial, setMemorial] = useState(null); // Store memorial data

  // Static memorials data (you can replace it with an API call)
  const memorials = [
    { id: 1, name: 'John Doe', biography: 'A beloved family man...', image: ProfilePicture, additionalInfo: 'Loved gardening and hiking.' },
    { id: 2, name: 'Jane Smith', biography: 'A kind soul...', image: ProfilePicture, additionalInfo: 'Passionate about painting and travel.' },
    // Add more memorials here...
  ];

  useEffect(() => {
    const foundMemorial = memorials.find(memorial => memorial.id === parseInt(id)); // Find memorial by ID
    if (foundMemorial) {
      setMemorial(foundMemorial);
    } else {
      console.log('Memorial not found!');
    }
  }, [id, memorials]); // Add memorials to the dependencies

  // If memorial data is not loaded, show a loading message or similar
  if (!memorial) {
    return <div>Loading...</div>;
  }

  return (
    <div className="memorial-page">
      <h1>{memorial.name}</h1>
      <img
        src={memorial.image} // Use the dynamically fetched image
        alt={memorial.name}
        style={{ width: '150px', height: '150px', borderRadius: '50%' }}
      />
      <p>{memorial.biography}</p>
      <p>{memorial.additionalInfo}</p>
    </div>
  );
};

export default MemorialPage;
