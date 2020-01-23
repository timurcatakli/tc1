import { AppLoading } from 'expo';
import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScr from './screens/WelcomeScr';
import AScr from './screens/AScr';
import BScr from './screens/BScr';
import { RegisterScr, ActivationScr, BuildingsScr } from './screens';
import LoginScr from './screens/LoginScr';
import HomeScr from './screens/HomeScr';
import OtherScr from './screens/OtherScr';

const AppStack = createStackNavigator({ Home: HomeScr, Other: OtherScr });
const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScr,
    Register: {
      screen: RegisterScr,
      navigationOptions: () => ({
        title: 'Register',
        headerBackTitle: '',
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
    headerMode: 'float',
    defaultNavigationOptions: {
      headerTitleStyle: {},
    },
  }
);

export default createAppContainer(
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
