import React from 'react';
import { Card } from '../components/magicui/card';

function TalentCard({ image, logo, title }) {
  return (
    <Card style={{ textAlign: 'center', borderRadius: '10px' }}>
      <Card.Body>
        <img src={logo} alt="Logo" style={{ width: '50px', marginBottom: '10px' }} />
        <img src={image} alt="Talent" style={{ width: '100%', borderRadius: '5px' }} />
        <h3 style={{ marginTop: '10px' }}>{title}</h3>
      </Card.Body>
    </Card>
  );
}
