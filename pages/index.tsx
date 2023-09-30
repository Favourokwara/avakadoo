// pages/index.js

import React from 'react';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  text-align: center;
  margin: 100px auto;
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 1.2rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <Title>Welcome to Your Health App</Title>
      <Description>Connecting Doctors and Patients</Description>
      {/* Add more content here */}
    </HomeWrapper>
  );
}

export default Home;

