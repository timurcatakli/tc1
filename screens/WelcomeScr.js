import React from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Text,
  Button,
  Card,
  CardItem,
} from 'native-base';

const WelcomeScr = () => {
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
      >
        <Button dark block onPress={() => {}} style={{ marginTop: 20 }}>
          <Text> Register </Text>
        </Button>
      </Content>
    </Container>
  );
};

export default WelcomeScr;
