import { createSwitchNavigator } from 'react-navigation';
import AuthFlow from './AuthFlow';

const RootNavigator = createSwitchNavigator({
  Auth: AuthFlow,
  // Home: {
  //   screen: AppFlow,
  // },
});

export default RootNavigator;
