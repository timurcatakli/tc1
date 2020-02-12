import { createStackNavigator } from 'react-navigation-stack';
import { PickBuildingScr } from 'screens';

const EmailNotVerifiedNavigation = createStackNavigator(
  {
    PickBuilding: {
      screen: PickBuildingScr,
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {},
      headerShown: false,
    },
  }
);

export default EmailNotVerifiedNavigation;
