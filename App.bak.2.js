import { AppLoading } from 'expo';
import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScr from './screens/WelcomeScr';
import RegisterScr from './screens/RegisterScr';
import AScr from './screens/AScr';
import BScr from './screens/BScr';
import LoginScr from './screens/LoginScr';

async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      'Rubik-Black': require('./assets/fonts/Rubik-Black.ttf'),
      'Rubik-BlackItalic': require('./assets/fonts/Rubik-BlackItalic.ttf'),
      'Rubik-Bold': require('./assets/fonts/Rubik-Bold.ttf'),
      'Rubik-BoldItalic': require('./assets/fonts/Rubik-BoldItalic.ttf'),
      'Rubik-Italic': require('./assets/fonts/Rubik-Italic.ttf'),
      'Rubik-Light': require('./assets/fonts/Rubik-Light.ttf'),
      'Rubik-LightItalic': require('./assets/fonts/Rubik-LightItalic.ttf'),
      'Rubik-Medium': require('./assets/fonts/Rubik-Medium.ttf'),
      'Rubik-MediumItalic': require('./assets/fonts/Rubik-MediumItalic.ttf'),
      'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
      'rubicon-icon-font': require('./assets/fonts/rubicon-icon-font.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

const App = () => {
  return <AppContainer />;
};

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScr,
    Register: RegisterScr,
    A: AScr,
    B: BScr,
    Login: LoginScr,
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
const AppContainer = createAppContainer(AppNavigator);

App.propTypes = {
  skipLoadingScreen: PropTypes.bool,
};

App.defaultProps = {
  skipLoadingScreen: false,
};

export default App;
