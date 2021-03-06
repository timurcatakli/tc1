import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  DomainFoundScr,
  AuthenticationScr,
  BuildingsScr,
  ErrorScr,
  ForgotPasswordScr,
  HomeScr,
  LoginScr,
  PersonalInfoScr,
  RegisterScr,
  LoginRegisterScr,
} from 'screens';

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
  const [isAuthenticated, setAuthenticated] = useState(false);
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

const AppStack = createStackNavigator(
  {
    Home: {
      screen: HomeScr,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {},
      headerShown: false,
    },
  }
);
const AuthStack = createStackNavigator(
  {
    Authentication: {
      screen: AuthenticationScr,
    },
    LoginRegister: {
      screen: LoginRegisterScr,
    },
    Register: {
      screen: RegisterScr,
    },
    DomainFound: {
      screen: DomainFoundScr,
    },
    Error: {
      screen: ErrorScr,
    },
    Buildings: {
      screen: BuildingsScr,
    },
    PersonalInfo: {
      screen: PersonalInfoScr,
    },
    Login: {
      screen: LoginScr,
    },
    ForgotPassword: {
      screen: ForgotPasswordScr,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {},
      headerShown: false,
    },
  }
);
const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      Welcome: AuthenticationScr,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Welcome',
    }
  )
);

export default AppScr;
