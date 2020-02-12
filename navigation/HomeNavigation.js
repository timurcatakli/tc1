import { createStackNavigator } from 'react-navigation-stack';
import { HomeScr } from 'screens';

const HomeNavigation = createStackNavigator(
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

export default HomeNavigation;
