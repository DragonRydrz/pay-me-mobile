import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/auth/LoginScreen';
import SignUpScreen from '../screens/auth/SignUpScreen';

const AuthFlow = createSwitchNavigator(
  {
    Login: LoginScreen,
    SignUp: SignUpScreen,
  },
  {
    initialRouteName: 'Login',
  }
);

export default AuthFlow;
