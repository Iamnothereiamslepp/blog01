function TalentPage() {
  const talents = [
    { image: '/path-to-image1', logo: '/path-to-logo1', title: 'Hololive DEV_IS' },
    { image: '/path-to-image2', logo: '/path-to-logo2', title: 'Holostars' },
    { image: '/path-to-image3', logo: '/path-to-logo3', title: 'Hololive Indonesia' },
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
