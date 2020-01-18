import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Button, Text } from 'native-base';

const AScr = props => {
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
        <Button dark block onPress={() => navigation.navigate('B')} style={{ marginTop: 20 }}>
          <Text> Screen B </Text>
        </Button>
        <Button dark block onPress={() => navigation.popToTop()} style={{ marginTop: 20 }}>
          <Text> Home </Text>
        </Button>
      </Content>
    </Container>
  );
};

AScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AScr;
