import { createSwitchNavigator } from 'react-navigation';
import AuthFlow from './AuthFlow';
import AppFlow from './AppFlow';

const RootNavigator = createSwitchNavigator(
  {
    Auth: AuthFlow,
    App: AppFlow,
  },
  {
    initialRouteName: 'Auth',
  }
);

export default RootNavigator;
