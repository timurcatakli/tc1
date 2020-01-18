import { AppLoading } from 'expo';
import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ActivityIndicator, AsyncStorage, StatusBar, StyleSheet, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import WelcomeScr from './screens/WelcomeScr';
import RegisterScr from './screens/RegisterScr';
import AScr from './screens/AScr';
import BScr from './screens/BScr';
import LoginScr from './screens/LoginScr';
import HomeScr from './screens/HomeScr';
import OtherScr from './screens/OtherScr';

const AppStack = createStackNavigator({ Home: HomeScr, Other: OtherScr });
const AuthStack = createStackNavigator(
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
