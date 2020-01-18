import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Button, Text } from 'native-base';

const LoginScr = props => {
  const { navigation } = props;
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
        <Text>Login Form </Text>
        <Button dark block onPress={() => navigation.navigate('Home')} style={{ marginTop: 20 }}>
          <Text>TC User Home</Text>
        </Button>
        <Button dark block onPress={() => navigation.popToTop()} style={{ marginTop: 20 }}>
          <Text>Welcome Page</Text>
        </Button>
      </Content>
    </Container>
  );
};

LoginScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default LoginScr;
