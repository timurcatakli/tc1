import React from 'react';
import { Container, Content } from 'native-base';

const BScr = () => {
  return (
    <Container>
      <Content
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 10,
          backgroundColor: 'red',
          height: '100%',
        }}
      />
    </Container>
  );
};

export default BScr;
