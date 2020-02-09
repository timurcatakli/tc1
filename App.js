import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import app from 'shared/firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthNavigation from '/navigation/AuthNavigation';
import HomeNavigation from '/navigation/HomeNavigation';
import EmailNotVerifiedNavigation from '/navigation/EmailNotVerifiedNavigation';
import AppContext from 'shared/providers/AppContext';

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
  const [isAuthenticationReady, setAuthenticationReady] = useState(false);
  const [isEmailVerified, setEmailVerified] = useState(false);

  const onAuthStateChanged = async user => {
    if (user) {
      setEmailVerified(user.emailVerified);
    }
    setAuthenticationReady(true);
    setAuthenticated(!!user);
  };

  app.auth().onAuthStateChanged(onAuthStateChanged);

  if (!isLoadingComplete || !isAuthenticationReady) {
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
  if (isAuthenticated) {
    return isEmailVerified ? (
      <HomeContainer />
    ) : (
      <AppContext.Provider value={{}}>
        <EmailNotVerifiedContainer />
      </AppContext.Provider>
    );
  }
  return <AuthContainer />;
};

const HomeContainer = createAppContainer(
  createSwitchNavigator(
    {
      Home: HomeNavigation,
    },
    {
      initialRouteName: 'Home',
    }
  )
);
const AuthContainer = createAppContainer(
  createSwitchNavigator({
    Home: AuthNavigation,
  })
);

const EmailNotVerifiedContainer = createAppContainer(
  createSwitchNavigator({
    Home: EmailNotVerifiedNavigation,
  })
);

export default AppScr;
