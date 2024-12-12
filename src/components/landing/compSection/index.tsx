import React from 'react';
import { Grid } from '../components/magicui/bento-grid';
import TalentCard from './TalentCard';

function TalentPage() {
  const talents = [
    { image: '/image1.jpg', logo: '/logo1.png', title: 'Talent 1' },
    { image: '/image2.jpg', logo: '/logo2.png', title: 'Talent 2' },
    { image: '/image3.jpg', logo: '/logo3.png', title: 'Talent 3' },
  ];

  return (
    <Grid container spacing={2}>
      {talents.map((talent, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <TalentCard {...talent} />
        </Grid>
      ))}
    </Grid>
  );
}

export default TalentPage;
