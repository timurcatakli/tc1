import { createStackNavigator } from 'react-navigation-stack';
import {
  DomainFoundScr,
  ForgotPasswordScr,
  LoginRegisterScr,
  LoginScr,
  PersonalInfoScr,
  RegisterScr,
} from 'screens';

const AuthNavigation = createStackNavigator(
  {
    LoginRegister: {
      screen: LoginRegisterScr,
    },
    Register: {
      screen: RegisterScr,
    },
    DomainFound: {
      screen: DomainFoundScr,
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
export default AuthNavigation;
