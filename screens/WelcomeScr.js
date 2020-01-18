import React from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';

import { Container, Content, Text, Button } from 'native-base';

const WelcomeScr = () => {
  const { navigate } = useNavigation();
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
        <View>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
        <Button dark block onPress={() => navigate('Register')} style={{ marginTop: 20 }}>
          <Text> Register.. </Text>
        </Button>
        <Button dark block onPress={() => navigate('Login')} style={{ marginTop: 20 }}>
          <Text> Login </Text>
        </Button>
      </Content>
    </Container>
  );
};

WelcomeScr.navigationOptions = {
  title: 'WELCOME',
  headerStyle: {},
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

WelcomeScr.propTypes = {};

WelcomeScr.defaultProps = {};

export default WelcomeScr;
