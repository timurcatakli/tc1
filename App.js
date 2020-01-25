import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Text, ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScr from './screens/WelcomeScr';
import AScr from './screens/AScr';
import BScr from './screens/BScr';
import { RegisterScr, ActivationScr, BuildingsScr } from './screens';
import LoginScr from './screens/LoginScr';
import HomeScr from './screens/HomeScr';
import OtherScr from './screens/OtherScr';

function handleLoadingError(error) {
  console.warn(error);
}

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

const AppScr = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => {
          setLoadingComplete(true);
        }}
      />
    );
  }
  return <AppContainer />;
};

const AppStack = createStackNavigator({ Home: HomeScr, Other: OtherScr });
const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScr,
      navigationOptions: () => ({
        headerShown: false,
      }),
    },
    Register: {
      screen: RegisterScr,
      navigationOptions: () => ({
        title: 'Register',
        headerBackTitle: '',
        headerBackTitleStyle: {
          fontFamily: 'Rubik-Medium',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: 16,
        },
        headerTitleStyle: {
          fontFamily: 'Rubik-Medium',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        },
      }),
    },
    Activation: {
      screen: ActivationScr,
      navigationOptions: () => ({
        title: 'Activation',
        headerBackTitle: '',
      }),
    },
    Buildings: {
      screen: BuildingsScr,
      navigationOptions: () => ({
        title: 'Your Building',
        headerBackTitle: '',
      }),
    },
    B: BScr,
    Login: {
      screen: LoginScr,
      navigationOptions: () => ({
        title: 'Login',
        headerBackTitle: '',
      }),
    },
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      headerTitleStyle: {},
      headerShown: false,
    },
  }
);

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Welcome: WelcomeScr,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Welcome',
    }
  )
);

export default AppScr;
