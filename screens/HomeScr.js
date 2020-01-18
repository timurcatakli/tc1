import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Text, Button } from 'native-base';

const HomeScr = props => {
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
        <Button
          dark
          block
          onPress={() => navigation.navigate('Register')}
          style={{ marginTop: 20 }}
        >
          <Text> Home Screen </Text>
        </Button>
        <Button dark block onPress={() => navigation.navigate('Login')} style={{ marginTop: 20 }}>
          <Text> Login </Text>
        </Button>
      </Content>
    </Container>
  );
};

HomeScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScr;
