import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../screens/auth/LoginScreen';

const AuthFlow = createStackNavigator({
  Login: {
    screen: LoginScreen,
  },
});

export default AuthFlow;
